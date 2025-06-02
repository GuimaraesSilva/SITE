import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const embed = searchParams.get('_embed');
    const perPage = 100;
    const categoryId = searchParams.get('categories');
    
    // Construir a URL da API do WordPress
    let apiUrl = `https://www.wp.igamingmexico.com/wp-json/wp/v2/posts?per_page=${perPage}`;
    
    // Adicionar parâmetro _embed se necessário
    if (embed) {
      apiUrl += '&_embed=true';
    }
    
    // Adicionar filtro de categoria se fornecido
    if (categoryId) {
      apiUrl += `&categories=${categoryId}`;
    }
    
    // Fazer a requisição para a API do WordPress
    const response = await fetch(apiUrl, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache' // Adicionar cabeçalho para evitar cache
        },
        next: { revalidate: 60 } // Reduzir o tempo de cache para 1 minuto
      });
    
    if (!response.ok) {
      throw new Error(`Erro na API do WordPress: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Processar os dados para garantir que as imagens e categorias estejam acessíveis
    const processedData = data.map((item: {
      _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
        'wp:term'?: Array<Array<{ name: string }>>;
      };
      [key: string]: string | number | boolean | object | null | undefined;
    }) => {
      // Extrair a URL da imagem em destaque
      let imageUrl = '';
      if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0]) {
        imageUrl = item._embedded['wp:featuredmedia'][0].source_url;
      }
      
      // Extrair a categoria principal
      let category = '';
      if (item._embedded && item._embedded['wp:term'] && item._embedded['wp:term'][0] && item._embedded['wp:term'][0][0]) {
        category = item._embedded['wp:term'][0][0].name;
      }
      
      return {
        ...item,
        better_featured_image: { source_url: imageUrl },
        category
      };
    });
    
    return NextResponse.json(processedData);
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    );
  }
}
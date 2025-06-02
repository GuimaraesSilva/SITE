import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://www.wp.igamingmexico.com/wp-json/wp/v2/categories?per_page=20');
    
    if (!response.ok) {
      return NextResponse.json({ error: 'Erro ao buscar categorias' }, { status: 500 });
    }
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Erro desconhecido' }, { status: 500 });
  }
}

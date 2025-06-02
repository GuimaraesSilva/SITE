import { HomeLastNews } from "@/components/home/homeLastNews/homeLastNews";
import Ads from "@/components/Ads/Ads";
import { useTranslations } from "next-intl";

// news_title
export default function LastNews() {
  const t = useTranslations("Header");

  return (
    <div className="p-4 lg:px-20 container mx-auto pb-20 md:pb-30 flex flex-col gap-5">
      <Ads slotId="" height="h-32" />
      <HomeLastNews titleComponent={t('nav_news')} />
      <div className="w-full ">
        {/* Container superior - em mobile é uma caixa, em desktop são duas */}
        <div className="w-full mb-4">
          <div className="hidden md:flex w-full gap-4">
            {/* Duas caixas lado a lado (apenas desktop) */}
            <Ads slotId="" height="h-44" />
            <Ads slotId="" height="h-44" />
          </div>

          {/* Caixa única superior (apenas mobile) */}
            <Ads className="md:hidden" slotId="" height="h-44" />
        </div>

        {/* Caixa inferior (em todas as resoluções) */}
          <Ads className="w-full mb-4" slotId="" height="h-16 md:h-24" />
      </div>
    </div>
  );
}

import { Promo } from '../../../widgets/promo';
import { Catalog } from '../../../widgets/catalog';
import { PageTitle } from '../../../shared/ui';
import { Footer } from '../../../widgets/footer';
import { Faq } from '../../../widgets/faq';
import { Header } from '../../../widgets/header';

export const HomePage = () => {
  return (
    <>
    <PageTitle title='Catalog | Goods4you'/>
    <main>
      <Header />
      <Promo />
      <Catalog />
      <Faq />
      <Footer />
    </main>
    </>
  );
};

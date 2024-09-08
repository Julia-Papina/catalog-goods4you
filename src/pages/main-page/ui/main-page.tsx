import { Promo } from '../../../widgets/promo';
import { Catalog } from '../../../widgets/catalog';
import { PageTitle } from '../../../shared/ui';
import { Faq } from '../../../widgets/faq';

export const HomePage = () => {
  return (
    <>
    <PageTitle title='Catalog | Goods4you'/>
    <main>
      <Promo />
      <Catalog />
      <Faq />
    </main>
    </>
  );
};

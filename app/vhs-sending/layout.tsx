import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sendu spólurnar örugglega – Tölvuhvíslarinn',
  description:
    'Pantaðu sendingarpakka fyrir VHS og MiniDV spólur. Ég sendi þér sterkan kassa, númeraða límmiða og fylgiseðil. Þú færð mynd af spólunum þegar þær koma og þær koma aftur til þín í sama kassa.',
};

export default function VhsSendingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

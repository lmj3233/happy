import './globals.css';

export const metadata = {
  title: 'Nimbus — 把想法做成能上线的产品',
  description: '从原型到生产环境的一站式构建与部署平台，推送代码即完成发布。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

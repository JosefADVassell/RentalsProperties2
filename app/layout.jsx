import '@/assets/styles/globals.css';
export const metadata ={
   title: 'PropertyPulse | Find the Perferct Rental',
   keywords: 'rental, find rentals, find properties', 
   description: 'Find your dream rental property',
    
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
     <body>
    <div>
       {children} 
       </div>  
    </body>
    </html>
  );
};

export default MainLayout;
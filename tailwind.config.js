tailwind.config = {
  theme: {
    extend: {
      colors: {
        navbg: '#F40404',
        bgborder: '#FFB800',
        navbtn: '#FFF',
        peragraph: '#6C6C6C',
        lastbtn: 'rgba(255, 255, 255, 0.50)',
        header: '#282828',
        company: '#858585',
        line: '#5C6A92',
        imgpart:'#C4C4C4',
        overlay:'rgba(0, 0, 0, 0.60)',
        page1:'#E5E5E5',
        page2:'#F0F0F0',
        footerbg:'#1F1F1F',
      },
      maxWidth: {
        'container': '1140px',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      backgroundImage: {
        'banners': "url('images/banner img')",
        textgradiant: "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%);",
        visitbg: "url('./images/visit.jpg')",
        banner: "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),url('images/banner-img.jpg')",
      },
      fontSize: {
        bannerheading: '64px',
      },
    }
  }
};


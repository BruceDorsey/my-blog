import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';


const sections = [
  { title: 'History', url: '#' },
  { title: 'Flavors', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Restaurants', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Recipes', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Pocket Spagetti', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'The Saucy Truth of Spagetti',
  description:
    "WARNING, YOU ARE NOT AUTHORIZED TO SEE THIS INFORMATION! KILL AGENT ACTIVATING IN 3....2.....1-",
  image: 'https://imgs.search.brave.com/HEvPvXNgy5R5lngLEbZl-7QeqIl-PtvHAUUL5IG9nI0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuZmFucGFnZS5p/dC93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvMjIvMjAyMS8w/Ni9zcGFnaGV0dGkt/Ym9sb2duZXNlLmpw/Zw',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'History of Spagetti',
    date: 'April 10',
    description:
      'Culinary history of our world was significantly changed with the expansion of famous spaghetti outside of the borders of Italy several centuries ago. Now, this meal represents one of the most popular foods in the world, and its road through our history has only started.',
    image: 'https://imgs.search.brave.com/chJ8ketbTdmXvJxi2rDuifvQ8HZz0R60d97Bx085dNk/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93d3cu/ZmxhZ3Nob3AuZmkv/V2ViUm9vdC92aWxr/YXNmaTAxL1Nob3Bz/LzIwMTQwODA0MDMv/NTNFNi8yRjU5L0FB/MkYvREFERS8xMDUz/LzBBMjgvMTAwQi8w/NDI0L2l0YWxpYW4t/ZmxhZy13YXZpbmcu/anBn',
    imageLabel: 'Image Text',
  },
  {
    title: 'It-s a-me!',
    date: 'April 11',
    description:
      'Spaghetti Is an Italian food that appears in both The Real World and the Mushroom Kingdom. In both SMG4 universe and the Nintendo canon, it is Marios favorite food; they commonly appear in SMG4 videos, and most of those times they are eaten by Mario.',
    image: 'https://imgs.search.brave.com/KqUAQ9LoT6bkbfKM_AAWZ41G-2k0Fi-wGMStDhkU3C8/rs:fit:480:360:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS90/WjBiVThIbUhTQS9o/cWRlZmF1bHQuanBn',
    imageLabel: 'Image Text',
  },
];



const sidebar = {
  title: 'About',
  description:
    'Spaghetti (Italian: [spaˈɡetti]) is a long, thin, solid, cylindrical pasta.[1] It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum wheat semolina.[2] Usually the pasta is white because refined flour is used, but whole wheat flour may be added. Spaghettoni is a thicker form of spaghetti, while capellini is a very thin spaghetti. Originally, spaghetti was notably long, but shorter lengths gained in popularity during the latter half of the 20th century and now it is most commonly available in 25–30 cm lengths. A variety of pasta dishes are based on it and it is frequently served with tomato sauce or meat or vegetables.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Spagetti.org" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Spagetti.org"
        description="GlorytoSpagetti"
      />
    </ThemeProvider>
  );
}
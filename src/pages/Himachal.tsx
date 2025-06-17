
import React from 'react';
import RegionalPageTemplate from '@/components/RegionalPageTemplate';

const Himachal = () => {
  const regionCards = [
    {
      id: 'kinnaur',
      name: 'Kinnaur',
      subtitle: 'The Land of Apples and Ancient Trade',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/kinnaur'
    },
    {
      id: 'shimla',
      name: 'Shimla',
      subtitle: 'Colonial Hills with Hidden Gardens',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/shimla'
    },
    {
      id: 'dodra-kwar-valley',
      name: 'Dodra Kwar Valley',
      subtitle: 'Remote Wilderness of Rare Landraces',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/dodra-kwar'
    },
    {
      id: 'barot-lug-valley',
      name: 'Barot Lug Valley',
      subtitle: 'Misty Forests and Traditional Charas',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/barot-lug'
    },
    {
      id: 'parvati-valley',
      name: 'Parvati Valley',
      subtitle: 'The Epicenter of Charas Culture',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/parvati-valley'
    },
    {
      id: 'malana',
      name: 'Malana',
      subtitle: 'Home of the Famed Malana Cream',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/malana'
    },
    {
      id: 'pangi-valley',
      name: 'Pangi Valley',
      subtitle: 'Isolated Valleys of Unique Genetics',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/pangi'
    },
    {
      id: 'tissa-valley',
      name: 'Tissa Valley',
      subtitle: 'Untouched Highlands and Secret Strains',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/tissa'
    }
  ];

  return (
    <RegionalPageTemplate
      regionName="Himachal Pradesh"
      tagline="Discover Landraces from the Land of the Gods"
      heroImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop&crop=center"
      introHeading="Explore the Valleys and Villages"
      introText="Himachal Pradesh is renowned for its ancient cannabis landraces and vibrant charas culture. The region's diverse valleys and remote villages have cultivated unique genetics for centuries, shaping a living heritage that continues to inspire growers and enthusiasts alike."
      regionCards={regionCards}
    />
  );
};

export default Himachal;

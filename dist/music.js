const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Across the Universe",
        artist: 'Rufus Wainwright',
        url: 'http://pb0xohu5g.bkt.clouddn.com/Across%20the%20Universe.mp3',
        cover: 'http://pb0xohu5g.bkt.clouddn.com/18-6-28/91759378.jpg',
      },
      {
        name: '7 years',
        artist: 'Lukas Graham',
        url: 'http://pb0xohu5g.bkt.clouddn.com/7%20years.mp3',
        cover: 'http://pb0xohu5g.bkt.clouddn.com/18-6-28/61364678.jpg',
      },
      {
        name: 'Whats Up',
        artist: '4 Non Blondes',
        url: 'http://pb0xohu5g.bkt.clouddn.com/What%27s%20Up.mp3',
        cover: 'http://pb0xohu5g.bkt.clouddn.com/18-6-28/10909557.jpg',
      }
    ]
});
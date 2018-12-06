const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Across the Universe",
        artist: 'Rufus Wainwright',
        url: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/music/Across%20The%20Universe.mp3',
        cover: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/image/acrous.png',
      },
      {
        name: 'Way Back Home',
        artist: 'SHAUN',
        url: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/music/Way%20Back%20Home.mp3',
        cover: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/image/waybackjome.jpg',
      },
      {
        name: 'Whats Up',
        artist: '4 Non Blondes',
        url: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/music/What\'s%20Up.mp3',
        cover: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/image/whatsup.png',
      },
      {
        name: '光年之外',
        artist: '邓紫棋',
        url: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/music/%E5%85%89%E5%B9%B4%E4%B9%8B%E5%A4%96.mp3',
        cover: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/image/guangnianzhiwai.jpg',
      },
      {
        name: '披风',
        artist: '陈奕迅',
        url: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/music/%E6%8A%AB%E9%A3%8E.mp3',
        cover: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/image/pifeng.jpg',
      },
      {
        name: '梦伴',
        artist: '李悦君',
        url: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/music/%E6%A2%A6%E4%BC%B4.mp3',
        cover: 'https://dzrx1020-1256808058.cos.ap-shanghai.myqcloud.com/image/mengban.png',
      }
    ]
});
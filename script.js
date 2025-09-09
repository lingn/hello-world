// Storage Arrays
let likedVideoIds = [];
let favoritedVideoIds = [];
let userUploadedVideoIds = [1, 3]; // Example: User has uploaded videos with ID 1 and 3

// Mock Data
const videos = [
  {
    id: 1,
    title: "Epic Parkour Jumps",
    uploaderType: 'user',
    uploaderName: 'TraceurTom',
    thumbnailUrl: 'https://picsum.photos/300/180?random=1',
    videoUrl: '#',
    uploaderAvatarUrl: 'https://picsum.photos/50/50?random=user1',
    publishDate: '2024-07-01',
    views: 15234,
    favoritesCount: 1200,
    duration: '03:15',
    tags: ['跑酷', '街头', '极限运动']
  },
  {
    id: 2,
    title: "Urban Flow Masterclass",
    uploaderType: 'admin',
    uploaderName: 'AdminFlow',
    thumbnailUrl: 'https://picsum.photos/300/180?random=2',
    videoUrl: '#',
    uploaderAvatarUrl: 'https://picsum.photos/50/50?random=admin1',
    publishDate: '2024-06-20',
    views: 28765,
    favoritesCount: 3500,
    duration: '10:05',
    tags: ['跑酷', '教程', '城市', '流畅']
  },
  {
    id: 3,
    title: "Rooftop Adventures",
    uploaderType: 'user',
    uploaderName: 'SkyHighSarah',
    thumbnailUrl: 'https://picsum.photos/300/180?random=3',
    videoUrl: '#',
    uploaderAvatarUrl: 'https://picsum.photos/50/50?random=user2',
    publishDate: '2024-05-10',
    views: 9876,
    favoritesCount: 750,
    duration: '05:42',
    tags: ['跑酷', '屋顶', '第一视角', '危险动作', '肾上腺素']
  },
  {
    id: 4,
    title: "Parkour Basics: Landing",
    uploaderType: 'admin',
    uploaderName: 'ParkourAcademy',
    thumbnailUrl: 'https://picsum.photos/300/180?random=4',
    videoUrl: '#',
    uploaderAvatarUrl: 'https://picsum.photos/50/50?random=admin2',
    publishDate: '2024-07-10',
    views: 35000,
    favoritesCount: 4800,
    duration: '08:22',
    tags: ['教程', '基础动作', '安全提示', '落地技巧']
  }
];

const tutorials = [
  {
    id: 101,
    title: "Mastering the Safety Vault",
    uploaderType: 'admin',
    uploaderName: 'CoachDave',
    thumbnailUrl: 'https://picsum.photos/300/180?random=101',
    videoUrl: '#',
    seriesTitle: "Vaulting Techniques 101",
    description: "A step-by-step guide to performing the safety vault correctly and efficiently.",
    uploaderAvatarUrl: 'https://picsum.photos/50/50?random=admin3',
    publishDate: '2024-07-05',
    views: 45000,
    favoritesCount: 5200,
    duration: '12:30',
    tags: ['教程', '基础动作', '安全 Vault', '跑酷教学']
  },
  {
    id: 102,
    title: "Introduction to Wall Runs",
    uploaderType: 'user',
    uploaderName: 'WallRunnerWill',
    thumbnailUrl: 'https://picsum.photos/300/180?random=102',
    videoUrl: '#',
    description: "Learn the fundamentals of wall runs, including approach and takeoff.",
    uploaderAvatarUrl: 'https://picsum.photos/50/50?random=user3',
    publishDate: '2024-06-15',
    views: 18500,
    favoritesCount: 1900,
    duration: '07:18',
    tags: ['跑酷', '教程', 'Wall Run', '技巧', '进阶']
  },
  {
    id: 103,
    title: "Precision Jumping Explained",
    uploaderType: 'user',
    uploaderName: 'PrecisionPete',
    thumbnailUrl: 'https://picsum.photos/300/180?random=103',
    videoUrl: '#',
    seriesTitle: "Advanced Jumping",
    description: "Techniques for accurate and safe precision jumps in various environments.",
    uploaderAvatarUrl: 'https://picsum.photos/50/50?random=user4',
    publishDate: '2024-05-25',
    views: 12000,
    favoritesCount: 1500,
    duration: '09:55',
    tags: ['跑酷', '精准跳跃', '高级技巧', '教程']
  },
  {
    id: 104,
    title: "Flow & Combinations",
    uploaderType: 'admin',
    uploaderName: 'AdminFlow',
    thumbnailUrl: 'https://picsum.photos/300/180?random=104',
    videoUrl: '#',
    description: "Tips on linking movements together to create smooth and efficient parkour lines.",
    uploaderAvatarUrl: 'https://picsum.photos/50/50?random=admin1', // Re-using admin1 avatar
    publishDate: '2024-04-30',
    views: 55000,
    favoritesCount: 6800,
    duration: '15:00',
    tags: ['跑酷', '流畅度', '组合动作', '高级教程', '跑酷教学', '风格']
  }
];

// Functions to populate pages (will be added next)
function displayVideos() {
  const videoGallery = document.getElementById('video-gallery');
  if (!videoGallery) return; // Only run on index.html

  videoGallery.innerHTML = ''; // Clear existing content

  videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    videoItem.setAttribute('data-id', video.id);

    const isLiked = likedVideoIds.includes(video.id);
    const isFavorited = favoritedVideoIds.includes(video.id);

    // Tag display logic
    let tagsHtml = '';
    if (video.tags && video.tags.length > 0) {
      if (video.tags.length <= 3) {
        tagsHtml = video.tags.map(tag => `<span class="tag-item">${tag}</span>`).join('');
      } else {
        tagsHtml = video.tags.slice(0, 2).map(tag => `<span class="tag-item">${tag}</span>`).join('') +
                   `<span class="tag-item">+${video.tags.length - 2}</span>`;
      }
    }

    videoItem.innerHTML = `
      <img src="${video.thumbnailUrl}" alt="${video.title} Thumbnail">
      <div class="video-info-header">
        <img class="uploader-avatar" src="${video.uploaderAvatarUrl}" alt="发布者头像">
        <h3>${video.title}</h3>
      </div>
      <p class="uploader-info">
        ${video.uploaderName} (${video.uploaderType})
      </p>
      <div class="item-meta">
        <span class="publish-date">${video.publishDate}</span>
        <span class="views">${video.views} 观看</span>
        <span class="favorites-count">${video.favoritesCount} 收藏</span>
        <span class="duration">${video.duration}</span>
      </div>
      <div class="item-tags">
        ${tagsHtml}
      </div>
      <div>
        <button class="like-btn ${isLiked ? 'active' : ''}" data-id="${video.id}">
          <span class="icon">👍</span> <span class="text">${isLiked ? '已赞' : '点赞'}</span>
        </button>
        <button class="favorite-btn ${isFavorited ? 'active' : ''}" data-id="${video.id}">
          <span class="icon">★</span> <span class="text">${isFavorited ? '已收藏' : '收藏'}</span>
        </button>
      </div>
    `;
    videoGallery.appendChild(videoItem);

    // Add event listeners
    videoItem.querySelector('.like-btn').addEventListener('click', (e) => {
      // Find the button itself to pass to toggleLike if needed for text update
      toggleLike(e.currentTarget.dataset.id, e.currentTarget);
    });
    videoItem.querySelector('.favorite-btn').addEventListener('click', (e) => {
      toggleFavorite(e.currentTarget.dataset.id, e.currentTarget);
    });
  });
}

function displayTutorials() {
  const tutorialList = document.getElementById('tutorial-list');
  if (!tutorialList) return; // Only run on tutorials.html

  tutorialList.innerHTML = ''; // Clear existing content

  tutorials.forEach(tutorial => {
    const tutorialItem = document.createElement('div');
    tutorialItem.classList.add('tutorial-item');
    tutorialItem.setAttribute('data-id', tutorial.id);

    let seriesTitleHtml = '';
    if (tutorial.seriesTitle) {
      seriesTitleHtml = `<h4>系列: ${tutorial.seriesTitle}</h4>`;
    }

    const isLiked = likedVideoIds.includes(tutorial.id);
    const isFavorited = favoritedVideoIds.includes(tutorial.id);

    // Tag display logic
    let tagsHtml = '';
    if (tutorial.tags && tutorial.tags.length > 0) {
      if (tutorial.tags.length <= 3) {
        tagsHtml = tutorial.tags.map(tag => `<span class="tag-item">${tag}</span>`).join('');
      } else {
        tagsHtml = tutorial.tags.slice(0, 2).map(tag => `<span class="tag-item">${tag}</span>`).join('') +
                   `<span class="tag-item">+${tutorial.tags.length - 2}</span>`;
      }
    }

    tutorialItem.innerHTML = `
      ${seriesTitleHtml}
      <img src="${tutorial.thumbnailUrl}" alt="${tutorial.title} Thumbnail">
      <div class="video-info-header">
        <img class="uploader-avatar" src="${tutorial.uploaderAvatarUrl}" alt="发布者头像">
        <h3>${tutorial.title}</h3>
      </div>
      <p class="uploader-info">
        ${tutorial.uploaderName} (${tutorial.uploaderType})
      </p>
      <p>${tutorial.description}</p> {/* Keep existing description for tutorials */}
      <div class="item-meta">
        <span class="publish-date">${tutorial.publishDate}</span>
        <span class="views">${tutorial.views} 观看</span>
        <span class="favorites-count">${tutorial.favoritesCount} 收藏</span>
        <span class="duration">${tutorial.duration}</span>
      </div>
      <div class="item-tags">
        ${tagsHtml}
      </div>
      <div>
        <button class="like-btn ${isLiked ? 'active' : ''}" data-id="${tutorial.id}">
          <span class="icon">👍</span> <span class="text">${isLiked ? '已赞' : '点赞'}</span>
        </button>
        <button class="favorite-btn ${isFavorited ? 'active' : ''}" data-id="${tutorial.id}">
          <span class="icon">★</span> <span class="text">${isFavorited ? '已收藏' : '收藏'}</span>
        </button>
      </div>
    `;
    tutorialList.appendChild(tutorialItem);

    // Add event listeners
    tutorialItem.querySelector('.like-btn').addEventListener('click', (e) => {
      toggleLike(e.currentTarget.dataset.id, e.currentTarget);
    });
    tutorialItem.querySelector('.favorite-btn').addEventListener('click', (e) => {
      toggleFavorite(e.currentTarget.dataset.id, e.currentTarget);
    });
  });
}

function toggleLike(itemId) {
  itemId = parseInt(itemId); // Ensure itemId is a number
  const itemIndex = likedVideoIds.indexOf(itemId);
  // If a button element is passed, use it. Otherwise, query all matching buttons.
  const buttonsToUpdate = buttonElement ? [buttonElement] : document.querySelectorAll(`.like-btn[data-id="${itemId}"]`);

  if (itemIndex > -1) {
    likedVideoIds.splice(itemIndex, 1); // Unlike
    console.log("Unliked item: " + itemId);
    buttonsToUpdate.forEach(button => {
      button.classList.remove('active');
      const textElement = button.querySelector('.text');
      if (textElement) textElement.textContent = '点赞';
    });
  } else {
    likedVideoIds.push(itemId); // Like
    console.log("Liked item: " + itemId);
    buttonsToUpdate.forEach(button => {
      button.classList.add('active');
      const textElement = button.querySelector('.text');
      if (textElement) textElement.textContent = '已赞';
    });
  }

  // If on profile page, refresh the displayed data to update lists
  if (window.location.pathname.endsWith('profile.html')) {
    displayProfileData();
  }
}

function toggleFavorite(itemId, buttonElement) {
  itemId = parseInt(itemId); // Ensure itemId is a number
  const itemIndex = favoritedVideoIds.indexOf(itemId);
  const buttonsToUpdate = buttonElement ? [buttonElement] : document.querySelectorAll(`.favorite-btn[data-id="${itemId}"]`);

  if (itemIndex > -1) {
    favoritedVideoIds.splice(itemIndex, 1); // Unfavorite
    console.log("Unfavorited item: " + itemId);
    buttonsToUpdate.forEach(button => {
      button.classList.remove('active');
      const textElement = button.querySelector('.text');
      if (textElement) textElement.textContent = '收藏';
    });
  } else {
    favoritedVideoIds.push(itemId); // Favorite
    console.log("Favorited item: " + itemId);
    buttonsToUpdate.forEach(button => {
      button.classList.add('active');
      const textElement = button.querySelector('.text');
      if (textElement) textElement.textContent = '已收藏';
    });
  }

  // If on profile page, refresh the displayed data
  if (window.location.pathname.endsWith('profile.html')) {
    displayProfileData();
  }
}

function displayProfileData() {
  const myUploadsDiv = document.getElementById('my-uploads');
  const likedVideosDiv = document.getElementById('liked-videos');
  const favoritedVideosDiv = document.getElementById('favorited-videos');

  if (!myUploadsDiv || !likedVideosDiv || !favoritedVideosDiv) return; // Only run on profile.html

  // Clear existing content
  myUploadsDiv.innerHTML = '';
  likedVideosDiv.innerHTML = '';
  favoritedVideosDiv.innerHTML = '';

  // --- Populate "My Uploads" ---
  const userVideos = videos.filter(video => userUploadedVideoIds.includes(video.id));
  if (userVideos.length > 0) {
    userVideos.forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.classList.add('video-item');
      videoItem.setAttribute('data-id', video.id);
      videoItem.innerHTML = `
        <img src="${video.thumbnailUrl}" alt="${video.title} Thumbnail">
        <h3>${video.title}</h3>
        <div>
          <button class="edit-btn" data-id="${video.id}">Edit</button>
          <button class="delete-btn" data-id="${video.id}">Delete</button>
        </div>
      `;
      myUploadsDiv.appendChild(videoItem);
      // TODO: Add event listeners for Edit/Delete buttons if functionality is needed later
    });
  } else {
    myUploadsDiv.innerHTML = '<p>No uploads yet.</p>';
  }

  // --- Populate "Liked Videos" ---
  // Combine videos and tutorials for liked/favorited items
  const allContent = [...videos, ...tutorials];
  const likedItems = allContent.filter(item => likedVideoIds.includes(item.id));
  if (likedItems.length > 0) {
    likedItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('video-item'); // Use 'video-item' for consistent styling
      itemDiv.setAttribute('data-id', item.id);
      itemDiv.innerHTML = `
        <img src="${item.thumbnailUrl}" alt="${item.title} Thumbnail">
        <h3>${item.title}</h3>
        <p class="uploader-info">Uploaded by: ${item.uploaderName} (${item.uploaderType})</p>
        <div>
          <button class="like-btn" data-id="${item.id}">Unlike</button> <!-- Liked, so show Unlike -->
          <button class="favorite-btn" data-id="${item.id}">${favoritedVideoIds.includes(item.id) ? 'Unfavorite' : 'Favorite'}</button>
        </div>
      `;
      likedVideosDiv.appendChild(itemDiv);
      itemDiv.querySelector('.like-btn').addEventListener('click', (e) => toggleLike(e.target.dataset.id));
      itemDiv.querySelector('.favorite-btn').addEventListener('click', (e) => toggleFavorite(e.target.dataset.id));
    });
  } else {
    likedVideosDiv.innerHTML = '<p>No liked videos yet.</p>';
  }

  // --- Populate "Favorited Videos" ---
  const favoritedItems = allContent.filter(item => favoritedVideoIds.includes(item.id));
  if (favoritedItems.length > 0) {
    favoritedItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('video-item'); // Use 'video-item' for consistent styling
      itemDiv.setAttribute('data-id', item.id);
      itemDiv.innerHTML = `
        <img src="${item.thumbnailUrl}" alt="${item.title} Thumbnail">
        <h3>${item.title}</h3>
        <p class="uploader-info">Uploaded by: ${item.uploaderName} (${item.uploaderType})</p>
        <div>
          <button class="like-btn" data-id="${item.id}">${likedVideoIds.includes(item.id) ? 'Unlike' : 'Like'}</button>
          <button class="favorite-btn" data-id="${item.id}">Unfavorite</button> <!-- Favorited, so show Unfavorite -->
        </div>
      `;
      favoritedVideosDiv.appendChild(itemDiv);
      itemDiv.querySelector('.like-btn').addEventListener('click', (e) => toggleLike(e.target.dataset.id));
      itemDiv.querySelector('.favorite-btn').addEventListener('click', (e) => toggleFavorite(e.target.dataset.id));
    });
  } else {
    favoritedVideosDiv.innerHTML = '<p>No favorited videos yet.</p>';
  }
  console.log("Profile data displayed. Liked:", likedVideoIds, "Favorited:", favoritedVideoIds);
}

// Function to update active bottom navigation link
function updateActiveBottomNav() {
  const pagePath = window.location.pathname;
  const bottomNavLinks = document.querySelectorAll('.bottom-nav a.bottom-nav-item');

  bottomNavLinks.forEach(link => {
    link.classList.remove('active-bottom-nav');
    const linkHref = link.getAttribute('href');
    // Handle cases for root path and direct file names
    if ((pagePath === '/' || pagePath.endsWith('index.html')) && linkHref === 'index.html') {
      link.classList.add('active-bottom-nav');
    } else if (pagePath.endsWith(linkHref) && linkHref !== '') { // Ensure linkHref is not empty
      link.classList.add('active-bottom-nav');
    }
  });
}

// Event Listeners (will be added later)
document.addEventListener('DOMContentLoaded', () => {
  updateActiveBottomNav(); // Set active bottom nav link on page load
  const pagePath = window.location.pathname;

  if (pagePath.endsWith('index.html') || pagePath === '/' || pagePath.length === 0) {
    displayVideos();
  } else if (pagePath.endsWith('tutorials.html')) {
    displayTutorials();
  } else if (pagePath.endsWith('profile.html')) {
    displayProfileData();
  }
});

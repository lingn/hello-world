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
    videoUrl: '#'
  },
  {
    id: 2,
    title: "Urban Flow Masterclass",
    uploaderType: 'admin',
    uploaderName: 'AdminFlow',
    thumbnailUrl: 'https://picsum.photos/300/180?random=2',
    videoUrl: '#'
  },
  {
    id: 3,
    title: "Rooftop Adventures",
    uploaderType: 'user',
    uploaderName: 'SkyHighSarah',
    thumbnailUrl: 'https://picsum.photos/300/180?random=3',
    videoUrl: '#'
  },
  {
    id: 4,
    title: "Parkour Basics: Landing",
    uploaderType: 'admin',
    uploaderName: 'ParkourAcademy',
    thumbnailUrl: 'https://picsum.photos/300/180?random=4',
    videoUrl: '#'
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
    description: "A step-by-step guide to performing the safety vault correctly and efficiently."
  },
  {
    id: 102,
    title: "Introduction to Wall Runs",
    uploaderType: 'user',
    uploaderName: 'WallRunnerWill',
    thumbnailUrl: 'https://picsum.photos/300/180?random=102',
    videoUrl: '#',
    description: "Learn the fundamentals of wall runs, including approach and takeoff."
  },
  {
    id: 103,
    title: "Precision Jumping Explained",
    uploaderType: 'user',
    uploaderName: 'PrecisionPete',
    thumbnailUrl: 'https://picsum.photos/300/180?random=103',
    videoUrl: '#',
    seriesTitle: "Advanced Jumping",
    description: "Techniques for accurate and safe precision jumps in various environments."
  },
  {
    id: 104,
    title: "Flow & Combinations",
    uploaderType: 'admin',
    uploaderName: 'AdminFlow',
    thumbnailUrl: 'https://picsum.photos/300/180?random=104',
    videoUrl: '#',
    description: "Tips on linking movements together to create smooth and efficient parkour lines."
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
    videoItem.setAttribute('data-id', video.id); // Set data-id on the item

    const isLiked = likedVideoIds.includes(video.id);
    const isFavorited = favoritedVideoIds.includes(video.id);

    videoItem.innerHTML = `
      <img src="${video.thumbnailUrl}" alt="${video.title} Thumbnail">
      <h3>${video.title}</h3>
      <p class="uploader-info">Uploaded by: ${video.uploaderName} (${video.uploaderType})</p>
      <div>
        <button class="like-btn" data-id="${video.id}">${isLiked ? 'Unlike' : 'Like'}</button>
        <button class="favorite-btn" data-id="${video.id}">${isFavorited ? 'Unfavorite' : 'Favorite'}</button>
      </div>
    `;
    videoGallery.appendChild(videoItem);

    // Add event listeners
    videoItem.querySelector('.like-btn').addEventListener('click', (e) => {
      toggleLike(e.target.dataset.id);
      // No need to update button text here, toggleLike handles it
    });
    videoItem.querySelector('.favorite-btn').addEventListener('click', (e) => {
      toggleFavorite(e.target.dataset.id);
      // No need to update button text here, toggleFavorite handles it
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
    tutorialItem.setAttribute('data-id', tutorial.id); // Set data-id on the item

    let seriesTitleHtml = '';
    if (tutorial.seriesTitle) {
      seriesTitleHtml = `<h4>Series: ${tutorial.seriesTitle}</h4>`;
    }

    const isLiked = likedVideoIds.includes(tutorial.id);
    const isFavorited = favoritedVideoIds.includes(tutorial.id);

    tutorialItem.innerHTML = `
      ${seriesTitleHtml}
      <img src="${tutorial.thumbnailUrl}" alt="${tutorial.title} Thumbnail">
      <h3>${tutorial.title}</h3>
      <p class="uploader-info">Uploaded by: ${tutorial.uploaderName} (${tutorial.uploaderType})</p>
      <p>${tutorial.description}</p>
      <div>
        <button class="like-btn" data-id="${tutorial.id}">${isLiked ? 'Unlike' : 'Like'}</button>
        <button class="favorite-btn" data-id="${tutorial.id}">${isFavorited ? 'Unfavorite' : 'Favorite'}</button>
      </div>
    `;
    tutorialList.appendChild(tutorialItem);

    // Add event listeners
    tutorialItem.querySelector('.like-btn').addEventListener('click', (e) => {
      toggleLike(e.target.dataset.id);
    });
    tutorialItem.querySelector('.favorite-btn').addEventListener('click', (e) => {
      toggleFavorite(e.target.dataset.id);
    });
  });
}

function toggleLike(itemId) {
  itemId = parseInt(itemId); // Ensure itemId is a number
  const itemIndex = likedVideoIds.indexOf(itemId);
  const likeButton = document.querySelector(`.like-btn[data-id="${itemId}"]`);

  if (itemIndex > -1) {
    likedVideoIds.splice(itemIndex, 1);
    console.log("Unliked item: " + itemId);
    if (likeButton) likeButton.textContent = 'Like';
  } else {
    likedVideoIds.push(itemId);
    console.log("Liked item: " + itemId);
    if (likeButton) likeButton.textContent = 'Unlike';
  }

  // If on profile page, refresh the displayed data
  if (window.location.pathname.endsWith('profile.html')) {
    displayProfileData();
  }
}

function toggleFavorite(itemId) {
  itemId = parseInt(itemId); // Ensure itemId is a number
  const itemIndex = favoritedVideoIds.indexOf(itemId);
  const favoriteButton = document.querySelector(`.favorite-btn[data-id="${itemId}"]`);

  if (itemIndex > -1) {
    favoritedVideoIds.splice(itemIndex, 1);
    console.log("Unfavorited item: " + itemId);
    if (favoriteButton) favoriteButton.textContent = 'Favorite';
  } else {
    favoritedVideoIds.push(itemId);
    console.log("Favorited item: " + itemId);
    if (favoriteButton) favoriteButton.textContent = 'Unfavorite';
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

// Function to update active navigation link
function updateActiveNav() {
  const pagePath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.classList.remove('active-nav');
    // Handle cases for root path and direct file names
    if ((pagePath === '/' || pagePath.endsWith('index.html')) && link.getAttribute('href') === 'index.html') {
      link.classList.add('active-nav');
    } else if (pagePath.endsWith(link.getAttribute('href'))) {
      link.classList.add('active-nav');
    }
  });
}

// Event Listeners (will be added later)
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNav(); // Set active nav link on page load
  const pagePath = window.location.pathname;

  if (pagePath.endsWith('index.html') || pagePath === '/' || pagePath.length === 0) {
    displayVideos();
  } else if (pagePath.endsWith('tutorials.html')) {
    displayTutorials();
  } else if (pagePath.endsWith('profile.html')) {
    displayProfileData();
  }
});

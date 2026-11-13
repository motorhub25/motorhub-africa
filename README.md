const listings = [
  {
    id: 1,
    category: 'cars',
    title: '2022 Toyota Hilux',
    price: 255000,
    currency: 'GHS',
    location: 'Ghana',
    city: 'Accra',
    brand: 'Toyota',
    model: 'Hilux',
    fuel: 'Diesel',
    transmission: 'Automatic',
    dealer: 'Urban Fleet Motors',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    status: 'approved'
  },
  {
    id: 2,
    category: 'cars',
    title: '2019 BMW X5',
    price: 320000,
    currency: 'NGN',
    location: 'Nigeria',
    city: 'Lagos',
    brand: 'BMW',
    model: 'X5',
    fuel: 'Petrol',
    transmission: 'Automatic',
    dealer: 'Naija Prestige Autos',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80',
    status: 'approved'
  },
  {
    id: 3,
    category: 'motorcycles',
    title: '2021 Royal Enfield Classic',
    price: 42000,
    currency: 'GHS',
    location: 'Ghana',
    city: 'Kumasi',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    fuel: 'Petrol',
    transmission: 'Manual',
    dealer: 'Rider House Ghana',
    image: 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=900&q=80',
    status: 'approved'
  },
  {
    id: 4,
    category: 'trucks',
    title: '2020 Isuzu Forward',
    price: 470000,
    currency: 'NGN',
    location: 'Nigeria',
    city: 'Port Harcourt',
    brand: 'Isuzu',
    model: 'Forward',
    fuel: 'Diesel',
    transmission: 'Manual',
    dealer: 'Delta Freight Transport',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c179363a3?auto=format&fit=crop&w=900&q=80',
    status: 'approved'
  },
  {
    id: 5,
    category: 'buses',
    title: '2018 Toyota Coaster',
    price: 185000,
    currency: 'GHS',
    location: 'Ghana',
    city: 'Tema',
    brand: 'Toyota',
    model: 'Coaster',
    fuel: 'Diesel',
    transmission: 'Automatic',
    dealer: 'Transit West Africa',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80',
    status: 'approved'
  },
  {
    id: 6,
    category: 'tricycles',
    title: '2023 Keke Napep Utility',
    price: 58000,
    currency: 'NGN',
    location: 'Nigeria',
    city: 'Abuja',
    brand: 'Keke Napep',
    model: 'Utility',
    fuel: 'Petrol',
    transmission: 'Manual',
    dealer: 'City Ride Mobility',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
    status: 'approved'
  },
  {
    id: 7,
    category: 'spare parts',
    title: 'Ford Transit Brake Kit',
    price: 14000,
    currency: 'GHS',
    location: 'Ghana',
    city: 'Takoradi',
    brand: 'Ford',
    model: 'Transit Kit',
    fuel: 'N/A',
    transmission: 'Spare Part',
    dealer: 'AutoCare Supplies',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80',
    status: 'approved'
  },
  {
    id: 8,
    category: 'heavy equipment',
    title: '2017 Caterpillar 428F',
    price: 860000,
    currency: 'NGN',
    location: 'Nigeria',
    city: 'Kaduna',
    brand: 'Caterpillar',
    model: '428F',
    fuel: 'Diesel',
    transmission: 'Hydraulic',
    dealer: 'InfraMax Equipment',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a4a6?auto=format&fit=crop&w=900&q=80',
    status: 'approved'
  }
];

const pendingQueue = [
  {
    id: 'pending-1',
    title: '2023 Mercedes-Benz Sprinter',
    dealer: 'Luxe Transit Ghana',
    status: 'pending'
  },
  {
    id: 'pending-2',
    title: '2019 Honda CR-V',
    dealer: 'Eko Auto Mart',
    status: 'pending'
  }
];

const listingGrid = document.getElementById('listingGrid');
const resultCount = document.getElementById('resultCount');
const adminQueue = document.getElementById('adminQueue');
const searchInput = document.getElementById('searchInput');
const locationFilter = document.getElementById('locationFilter');
const priceFilter = document.getElementById('priceFilter');
const categoryButtons = document.querySelectorAll('.category-btn');
const resetFiltersButton = document.querySelector('.reset-filters');
const listingForm = document.getElementById('listingForm');

let activeCategory = 'all';

function formatPrice(value, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value).replace('$', currency === 'NGN' ? 'NGN ' : 'GHS ');
}

function filterByPrice(item) {
  const values = {
    'under-50k': item.price < 50000,
    '50k-150k': item.price >= 50000 && item.price <= 150000,
    '150k-300k': item.price > 150000 && item.price <= 300000,
    '300k-plus': item.price > 300000
  };

  return priceFilter.value === 'all' ? true : values[priceFilter.value];
}

function renderListings() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const locationValue = locationFilter.value;

  const filtered = listings.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesLocation = locationValue === 'all' || item.location === locationValue;
    const matchesQuery = !searchTerm || [
      item.title,
      item.brand,
      item.model,
      item.location,
      item.city,
      item.dealer
    ].join(' ').toLowerCase().includes(searchTerm);
    const matchesPrice = filterByPrice(item);

    return matchesCategory && matchesLocation && matchesQuery && matchesPrice;
  });

  resultCount.textContent = filtered.length;

  if (!filtered.length) {
    listingGrid.innerHTML = `
      <div class="empty-state">
        No demo listings match the current filters. Try broadening the search or adjusting the price range.
      </div>
    `;
    return;
  }

  listingGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="listing-card">
          <div class="listing-image" style="background-image: url('${item.image}')" data-demo="Demo"></div>
          <div class="card-body">
            <div class="card-header">
              <span class="badge">${item.category}</span>
              <span class="price">${formatPrice(item.price, item.currency)}</span>
            </div>
            <h3>${item.title}</h3>
            <div class="card-meta">
              <span>${item.location}</span>
              <span>${item.city}</span>
              <span>${item.transmission}</span>
            </div>
            <div class="dealer-row">
              <div>
                <strong>${item.dealer}</strong>
                <small>${item.brand} • ${item.fuel}</small>
              </div>
              <a class="contact-btn" href="https://wa.me/233200000000" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderAdminQueue() {
  adminQueue.innerHTML = pendingQueue
    .map(
      (item) => `
        <li class="queue-item">
          <div class="queue-copy">
            <strong>${item.title}</strong>
            <small>${item.dealer}</small>
          </div>
          <div class="queue-actions">
            <button class="action-btn accept" type="button" data-action="accept" data-id="${item.id}">Approve</button>
            <button class="action-btn reject" type="button" data-action="reject" data-id="${item.id}">Reject</button>
          </div>
        </li>
      `
    )
    .join('');
}

function handleAdminAction(event) {
  const btn = event.target.closest('[data-action]');
  if (!btn) return;

  const { id, action } = btn.dataset;
  const index = pendingQueue.findIndex((item) => item.id === id);
  if (index === -1) return;

  pendingQueue.splice(index, 1);
  renderAdminQueue();

  if (action === 'accept') {
    const accepted = {
      id: `approved-${Date.now()}`,
      title: 'Approved Demo Listing',
      dealer: 'Admin Approved',
      status: 'approved'
    };
    pendingQueue.push(accepted);
  }
}

function resetFilters() {
  activeCategory = 'all';
  searchInput.value = '';
  locationFilter.value = 'all';
  priceFilter.value = 'all';
  categoryButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.category === 'all');
  });
  renderListings();
}

searchInput.addEventListener('input', renderListings);
locationFilter.addEventListener('change', renderListings);
priceFilter.addEventListener('change', renderListings);
resetFiltersButton.addEventListener('click', resetFilters);
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderListings();
  });
});

adminQueue.addEventListener('click', handleAdminAction);

listingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(listingForm);
  const newItem = {
    id: `pending-${Date.now()}`,
    title: formData.get('title'),
    dealer: formData.get('dealerName') || 'New Dealer',
    status: 'pending'
  };

  pendingQueue.unshift(newItem);
  renderAdminQueue();
  listingForm.reset();

  const submitButton = listingForm.querySelector('.submit-btn');
  submitButton.textContent = 'Submitted for review';
  submitButton.disabled = true;

  setTimeout(() => {
    submitButton.textContent = 'Submit for approval';
    submitButton.disabled = false;
  }, 1800);
});

renderListings();
renderAdminQueue();

window.addEventListener('DOMContentLoaded', () => {
  renderListings();
  renderAdminQueue();
});


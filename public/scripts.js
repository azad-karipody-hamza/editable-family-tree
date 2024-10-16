const familyTreeData = {
  id: 1,
  name: 'Father',
  dob: '1965-01-01',
  img: 'father.jpg',
  children: [
    { id: 2, name: 'Son', dob: '1990-01-01', img: 'son.jpg' },
    { id: 3, name: 'Daughter', dob: '1992-01-01', img: 'daughter.jpg' }
  ]
};

function renderFamilyTree(treeData) {
  const familyTree = document.getElementById('family-tree');
  familyTree.innerHTML = '';
  
  const personDiv = createPersonElement(treeData);
  familyTree.appendChild(personDiv);

  treeData.children.forEach(child => {
    const childDiv = createPersonElement(child);
    familyTree.appendChild(childDiv);
  });
}

function createPersonElement(person) {
  const personDiv = document.createElement('div');
  personDiv.classList.add('person');
  personDiv.innerHTML = `
    <img src="${person.img}" alt="${person.name}">
    <p>${person.name}</p>
  `;

  personDiv.addEventListener('click', () => openProfileModal(person));

  return personDiv;
}

function openProfileModal(person) {
  const modal = document.getElementById('profile-modal');
  modal.style.display = 'block';

  document.getElementById('profile-id').value = person.id;
  document.getElementById('name').value = person.name;
  document.getElementById('dob').value = person.dob;
}

document.getElementById('profile-form').addEventListener('submit', (e) => 
{
  e.preventDefault();
  const id = document.getElementById('profile-id').value;
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;

  const updatedPerson = familyTreeData.children.find(p => p.id == id);
  if (updatedPerson) {
    updatedPerson.name = name;
    updatedPerson.dob = dob;
  }

  renderFamilyTree(familyTreeData);
  closeModal();
});

function closeModal() {
  const modal = document.getElementById('profile-modal');
  modal.style.display = 'none';
}

renderFamilyTree(familyTreeData);


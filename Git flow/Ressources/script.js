const terminal = document.getElementById('terminal');
const fileContent = document.getElementById('file-content');
const branchCanvas = document.getElementById('branchCanvas');
const commitMessageInput = document.getElementById('commit-message');
const ctx = branchCanvas.getContext('2d');

let repoInitialized = false;
let currentBranch = 'main';
let branches = { main: [] };
let isEditing = false;

function logCommand(command, message) {
  terminal.innerHTML += `<p>$ ${command}</p><p>${message}</p>`;
  terminal.scrollTop = terminal.scrollHeight;
}

function initializeRepo() {
  if (!repoInitialized) {
    repoInitialized = true;
    logCommand('git init', 'Repository initialisé.');
    drawBranches();
  } else {
    logCommand('git init', 'Repository déjà initialisé.');
  }
}

function createBranch() {
  if (!repoInitialized) {
    logCommand('git branch', 'Veuillez initialiser le repository avec `git init`.');
    return;
  }
  if (!branches['feature/new-feature']) {
    branches['feature/new-feature'] = [...branches[currentBranch]];
    logCommand('git branch feature/new-feature', 'Nouvelle branche créée : feature/new-feature.');
    drawBranches();
  } else {
    logCommand('git branch', 'La branche feature/new-feature existe déjà.');
  }
}

function checkoutBranch() {
  if (branches['feature/new-feature']) {
    currentBranch = 'feature/new-feature';
    logCommand('git checkout feature/new-feature', 'Vous êtes maintenant sur la branche feature/new-feature.');
    drawBranches();
  } else {
    logCommand('git checkout', 'La branche feature/new-feature n\'existe pas.');
  }
}

function editFile() {
  if (!repoInitialized) {
    logCommand('edit', 'Veuillez initialiser le repository avec `git init`.');
    return;
  }
  isEditing = true;
  fileContent.disabled = false;
  logCommand('edit', 'Mode édition activé. Modifiez le contenu du fichier puis commitez vos changements.');
}

function commitChanges() {
  const commitMessage = commitMessageInput.value || "Modification sans message";
  if (!isEditing) {
    logCommand('git commit', 'Aucune modification en attente de commit.');
    return;
  }
  isEditing = false;
  fileContent.disabled = true;
  branches[currentBranch].push(commitMessage);
  logCommand(`git commit -m "${commitMessage}"`, `Commit enregistré avec message : "${commitMessage}".`);
  commitMessageInput.value = "";
  drawBranches();
}

function mergeBranch() {
  if (currentBranch !== 'main' && branches['feature/new-feature']) {
    const featureCommits = branches['feature/new-feature'];
    branches['main'] = branches['main'].concat(featureCommits);
    branches['feature/new-feature'] = [];
    logCommand('git merge feature/new-feature', 'Branche feature/new-feature fusionnée dans main.');
    drawBranches();
  } else {
    logCommand('git merge', 'Fusion impossible. Assurez-vous d’être sur main et que feature/new-feature existe.');
  }
}

function drawBranches() {
    ctx.clearRect(0, 0, branchCanvas.width, branchCanvas.height);
  
    let yPosition = 20;
    Object.keys(branches).forEach((branch) => {
      ctx.fillStyle = 'black';
      ctx.fillText(branch, 20, yPosition);
  
      branches[branch].forEach((commit, index) => {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(150 + index * 30, yPosition, 5, 0, Math.PI * 2, true);
        ctx.fill();
      });
  
      if (branch === currentBranch) {
        ctx.fillStyle = 'black';
        ctx.fillText('← Vous êtes ici', 160 + branches[branch].length * 30, yPosition);
      }
  
      yPosition += 40;
    });
  }

const jobs = [
  { title: "Frontend Developer", company: "Tech Corp", location: "Remote" },
  { title: "Backend Developer", company: "CodeWorks", location: "New York" },
  { title: "UI/UX Designer", company: "System ", location: "Delhi" },
  { title: "Full Stack Developer", company: "google", location: "Remote" }
];

const jobsContainer = document.getElementById("jobsContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
function displayJobs(jobList) {
  jobsContainer.innerHTML = "";
  jobList.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p class="company">${job.company} - ${job.location}</p>
      <button>Apply Now</button>
    `;
    jobsContainer.appendChild(card);
  });
}
displayJobs(jobs);
searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(keyword) ||
    job.company.toLowerCase().includes(keyword)
  );
  displayJobs(filtered);
});

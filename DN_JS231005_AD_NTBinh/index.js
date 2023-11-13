const job = [
  {
    job: "jobValue",
    status: 1,
  },
];
// localStorage.setItem("job", JSON.stringify(job));

function addJob() {
  let jobDetail = document.getElementById("inputJob");
  let jobValue = jobDetail.value;
  const newJob = {
    job: jobValue,
    status: 1,
  };
  const localData = JSON.parse(localStorage.getItem("job"));
  localData.push(newJob);
  localStorage.setItem("job", JSON.stringify(localData));
  document.getElementById("inputJob").value = "";
  renderJob();
}

function renderJob() {
  const localData = JSON.parse(localStorage.getItem("job"));
  const jobAdding = document.getElementById("jobList");
  const jobRemind = document.getElementById("jobRemind");
  jobAdding.innerHTML = "";
  localData.forEach(function (item, index) {
    jobAdding.innerHTML += `
      <li class="todo_box">
            <div class="li_left">
              <input type="checkbox" onclick="cross('${index}')" />
              <p id="nameJob">${item.job}</p>
            </div>
            <div class="li_right">
              <button onclick="editBtn('${index}')">
                <i class="fa-solid fa-pencil"></i>
              </button>
              <button onclick="deleteBtn('${index}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>`;
    if (localData.length > 0) {
      document.getElementById("noJob").style.display = "none";
      document.getElementById("jobRemind").style.display = "block";
      jobRemind.innerHTML = `<p>Công việc đã hoàn thành : 0/${localData.length}</p>`;
    }
  });
}
renderJob();

function cross(i) {
  const localData = JSON.parse(localStorage.getItem("job"));
  const jobRemind = document.getElementById("jobRemind");
  const className = document.querySelectorAll("#nameJob");
  className[i].classList.toggle("active");
  const activeJob = document.querySelectorAll(".active");
  jobRemind.innerHTML = `<p>Công việc đã hoàn thành : ${activeJob.length}/${localData.length}</p>`;
}

function deleteBtn(jobIndex) {
  let popUp = "Bạn có chắc muốn xóa công việc này chứ ?";
  if (confirm(popUp) == true) {
    const dataLocal = JSON.parse(localStorage.getItem("job"));
    const newData = dataLocal.filter(function (item, index) {
      return jobIndex != index;
    });
    if (newData.length == []) {
      document.getElementById("jobRemind").style.display = "none";
      document.getElementById("noJob").style.display = "block";
    }
    localStorage.setItem("job", JSON.stringify(newData));
    renderJob();
  } else {
    popUp = "Bạn đã hủy xóa!";
  }
}
function cancelBtn() {
  document.getElementById("popUpForEdit").style.display = "none";
}
function editBtn(i) {
  document.getElementById("popUpForEdit").style.display = "block";
}
function okBtn(index) {
  document.getElementById("popUpForEdit").style.display = "none";
  const dataLocal = JSON.parse(localStorage.getItem("job"));
  const newJob = document.getElementById("jobEditValue").value;
  const newData = dataLocal.map(function (item, i) {
    return {
      job: newJob,
      status: 1,
    };
  });
  console.log(newData);
  localStorage.setItem("job", JSON.stringify(newData));
  renderJob();
}

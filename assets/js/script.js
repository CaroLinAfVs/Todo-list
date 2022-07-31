let taskList = [
    { id: 1, name: 'limpiar el auto', done: false },
    { id: 2, name: 'ir al supermercado', done: false },
    { id: 3, name: 'hacer el almuerzo', done: false }
  ];
  
  const ingresoTarea = document.querySelector('.inputUser');
  const addButton = document.querySelector('#addButton');
  const totalTareas = document.querySelector('#total');
  const tareasRealizadas = document.querySelector('#done');
  const ulId = document.querySelector('#ul-id');
  const ulTask = document.querySelector('#ul-homework');
  const ulCheck = document.querySelector('#ul-check');
  const ulDelete = document.querySelector('#ul-delete');
  let accumulator = 4;
  
  function actualizar() {
    let idHtml = '';
    let taskHtml = '';
    let checkHtml = '';
    let deleteHtml = '';
  
    for (const task of taskList) {
      idHtml += `<li>${task.id}<li>`;
      taskHtml += `<li>${task.name}<li>`;
      checkHtml += `<li><input type="checkbox" onchange="check(${task.id})" checked = ""/><li>`;
      deleteHtml += `<li><button onclick="remover(${task.id})">X</button><li>`;
    }
  
    ulId.innerHTML = idHtml;
    ulTask.innerHTML = taskHtml;
    ulCheck.innerHTML = checkHtml;
    ulDelete.innerHTML = deleteHtml;
  
    totalTareas.innerHTML = taskList.length;
    tareasRealizadas.innerHTML = taskList.filter(
      (item) => item.done == true
    ).length;
  }
  
  window.onload = function () {
    actualizar();
  };
  
  addButton.addEventListener('click', () => {
    console.log(ingresoTarea);
    if (ingresoTarea.value == '') {
      alert('No has agregado una tarea');
    }
  
    let newTask = {
      id: accumulator++,
      name: ingresoTarea.value
    };
  
    taskList.push(newTask);
    ingresoTarea.value = '';
    actualizar();
  });
  
  // function check(id) {}
  function check(id) {
    const index = taskList.findIndex((item) => item.id == id);
    const newTask = {
      id,
      name: taskList[index].name,
      done: !taskList[index].done
    };
    taskList.splice(index, 1, newTask);
    actualizar();
  }
  console.log(check)
  function remover(id) {
    const index = taskList.findIndex((item) => item.id == id);
    taskList.splice(index, 1);
    actualizar();
  }
  
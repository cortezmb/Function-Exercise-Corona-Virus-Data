var newStateList = data.map((state)=> {
    return `<div class="col-3 mt-5">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${state.state}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Cases: ${state.cases}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Deaths: ${state.deaths}</h6>
        </div>
    </div>
</div>`
});
var cardRow = document.querySelector('.row');
cardRow.innerHTML = newStateList.join("");

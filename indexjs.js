function onLoad(data){

    $.each(data, function(key,value){
        var divs = '<div class="card col-3 p-5 m-4 bg-success > <div class="card-body mr-30">'
        divs += '<h5 class="card-title">'+ value.country +'</h5>'
        divs += '<p class="card-text">total case :'+ value.total_case   +'</p>'
        divs += '<p class="card-text">total death : '+ value.total_death+'</p>'
        divs += '<p class="card-text">new death : '+ value.new_death+ '</p>'
        divs += '<p class="card-text">total recover : '+ value.total_recover+'</p>'
        divs += '<p class="card-text">active case : '+ value.active_case+'</p>'
        divs += '<p class="card-text">serious critial : '+value.serious_critial+'</p>'
    $('.container').append(divs);
    })


}

function loadData() {
    const url =" http://localhost:3000/0";
    $.get(url, (data) =>{
        onLoad(data);
    });


}


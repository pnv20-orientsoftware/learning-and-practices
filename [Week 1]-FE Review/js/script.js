function loadData(endpoint) {
    if (endpoint == null)
        endpoint = '';
    $.ajax({
        url: "http://5cfdbc82ca949b00148d38e8.mockapi.io/" + endpoint + "?page=1&limit=12",
        success: function(data) {
            if (endpoint == "users") {
                let userimage = "<div class='data-img'><div class='row'>";
                data.forEach(user => {
                    userimage += "<div class='col-xs-3 col-sm-3 col-md-3 col-lg-3 data-box'><a href='#'><img src=" + user.avatar + "><p class='user-name'>" + user.name + "</p></a></div>"
                });
                userimage += "<div></div>";
                $("#data").html(userimage);
            } else if (endpoint == "supplier") {
                let suppliers = "<div class='data-supplier'><div class='row'>";
                data.forEach(supplier => {
                    suppliers += "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4 sup-box'><p>" + supplier.name + "</p><p>" + supplier.email + "</p><p>" + supplier.phone_number + "</p></div>"
                });
                suppliers += "</div></div>";
                $("#data").html(suppliers);
            }

        },
        error: function() {
            alert('Data not found!')
        }
    })
}

$('.ajax-btn').on('click', function() {
    let endpoint = $(this).attr("data-url");
    loadData(endpoint);
});

$.ajax({
    url: "http://5cfdbc82ca949b00148d38e8.mockapi.io/users?page=1&limit=10",
    success: function(data) {
        let menu = "";
        data.forEach(user => {
            menu += "<li><a href='#' onClick='getDetail(" + user.id + ")' class = 'show-data'>" + user.name + "</a></li>"
        });
        $("#links").html(menu);
    },
    error: function() {
        alert('Data not found!')
    }
});

function getDetail(id) {
    $.ajax({
        url: "http://5cfdbc82ca949b00148d38e8.mockapi.io/users/" + id,
        success: function(data) {
            let detail = "";
            detail += "<p id='fullname'>" + data.name + "</p><img src=" + data.avatar + " width='30%' height='30%'></img>";
            $("#data").html(detail);
        },
        error: function() {
            alert('Data not found!');
        }
    })
}
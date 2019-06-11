$(window).load(function() {
    loadArticlesTitle()
})

function loadArticlesTitle() {
    $.ajax({
        url: 'http://5cff088dd691540014b0d770.mockapi.io/articles?page=1&limit=6',
        method: 'GET',
        success: function(data) {
            let listArticles = "";
            data.forEach(article => {
                listArticles += "<li>";
                listArticles += "<a id='" + article.id + "' onclick='loadArticleContent(this.id)'>" + article.title + "</a>"
                listArticles += "</li>";
            });
            $('#articles-title').html(listArticles);
            loadArticleContent(data[0].id)
        },
        error: function() {
            alert("The content is not found")
        }
    })
}

function loadArticleContent(id) {
    $.ajax({
        url: 'http://5cff088dd691540014b0d770.mockapi.io/articles/' + id,
        method: 'GET',
        success: function(article) {
            let content = "";
            content += "<h1>" + article.title + "</h1>";
            // content += "<h3>A generic two column layout</h3>";
            content += "<p>" + article.content + "</p>";
            $('#article-content').html(content);
        },
        error: function() {
            alert("The content is not found")
        }
    })
}
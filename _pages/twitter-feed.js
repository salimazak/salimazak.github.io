<div id="twitter-feed"></div>

<script>
fetch('/_pages/tweets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const twitterFeed = document.getElementById('twitter-feed');
        data.forEach(tweet => {
            const tweetElement = document.createElement('div');
            tweetElement.className = 'tweet';
            tweetElement.innerHTML = `
                <p>${tweet.text}</p>
                <small>${tweet.created_at ? new Date(tweet.created_at).toLocaleString() : 'Tarih bilgisi mevcut değil.'}</small>
            `;
            twitterFeed.appendChild(tweetElement);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
</script>

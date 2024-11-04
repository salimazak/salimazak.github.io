---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Salim Azak is a Lecturer at the Structural and Earthquake Engineering Laboratory in the Department of Civil Engineering at Middle East Technical University. He holds a Ph.D. from the RACLAB of Electrical and Electronics Engineering at Konya Technical University, supervised by Prof. Akif Durdu. His doctoral thesis focused on vision-based driving for autonomous vehicles.

His research focuses on the intersection of robotics and computer vision, emphasizing sensor-based control systems. His primary interests lie in extracting meaningful information from visual data to facilitate robot navigation. Additionally, he explores the fusion of visual, inertial, and LiDAR sensors to enhance navigation accuracy. Within this scope, his work covers end-to-end autonomous driving systems, autonomous flight systems, and multi-task learning. His expertise further extends to critical areas such as state estimation, localization, visual SLAM, and visual odometry.

Dr. Azak is also an Associate Editor at [IEEE Robotics and Automation Letters (RA-L)](https://www.ieee-ras.org/publications/ra-l).  

<a class="twitter-follow-button" href="https://twitter.com/salimazak">Follow @salimazak</a> <span>for featured papers about Robotics and Computer Vision and flagship conferences (CVPR, ICCV, ECCV, BMVC, ICRA, IROS, NeurIPS, ICLR, ICML, WACV) of our community!</span>  

<!--# News-->
{% include twitter-timeline.html %}

<div id="twitter-feed-container">
    <div class="twitter-feed-header">
        <span>Posts from <a href="https://twitter.com/salimazak" target="_blank">@salimazak</a></span>
        <a href="https://twitter.com/salimazak" target="_blank" class="follow-button">Follow on X</a>
    </div>
    <div id="twitter-feed"></div>
</div>

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
                <div class="tweet-header">
                    <img src="${tweet.profile_image_url}" alt="Profile Image" class="profile-image">
                    <a href="https://twitter.com/${tweet.username}" target="_blank" class="username">@${tweet.username}</a>
                    <span class="tweet-date">${new Date(tweet.created_at).toLocaleString()}</span>
                </div>
                <p>${tweet.text.replace(/(@\w+)/g, '<a href="https://twitter.com/$1" target="_blank">$1</a>')
                               .replace(/(#\w+)/g, '<a href="https://twitter.com/hashtag/$1" target="_blank">$1</a>')
                               .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')}</p>
            `;
            twitterFeed.appendChild(tweetElement);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
</script>

<style>
    #twitter-feed {
        max-width: 600px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
    }
    .tweet {
        border: 1px solid #e1e8ed;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
        background-color: #f5f8fa;
    }
    .tweet-header {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
    .profile-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .username {
        font-weight: bold;
        color: #1DA1F2;
        text-decoration: none;
        margin-right: 10px;
    }
    .username:hover {
        text-decoration: underline;
    }
    .tweet-date {
        color: #657786;
        font-size: 0.9em;
    }
    .tweet p {
        margin: 0;
    }
</style>


<!--A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.-->

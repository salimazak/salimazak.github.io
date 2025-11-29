---
title: "News"
layout: page
classes: no-sidebar
---

<div class="left-sidebar">
  <img src="/images/SA2.JPG" alt="SA2" class="profile-photo">
  <!-- Visitor map widget -->
  <div class="visitor-map">
    <h3>Where My Visitors Are From</h3>
    <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=7yU4-8nEGjyXwXk3zoRxGmIsJofySGSt3WY9aqUCf20&cl=ffffff&w=a"></script>
  </div>
</div>

# News

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for item in sorted_news %}
<div class="news-entry" style="margin-bottom: 1.75rem;">
  <p class="news-date" style="color:#6c757d; font-size:0.95em; margin-bottom:0.25rem;">
    {{ item.date | date: "%B %d, %Y" }}
  </p>
  <h3 style="margin:0 0 0.25rem 0;">
    <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
  </h3>
  <div class="news-body" style="margin-top:0.25rem;">
    {{ item.content | markdownify }}
  </div>
</div>
<hr>
{% endfor %}

---
title: "News"
layout: page
classes: no-sidebar
---

<div style="float:left; width:320px; margin-right:40px; margin-bottom:30px;">
  <img src="/images/SA2.JPG" alt="SA2" style="width:100%; border-radius:6px;">

  <div style="margin-top:1rem;">
    <h3>Where My Visitors Are From</h3>
    <script type="text/javascript" id="clustrmaps"
            src="//clustrmaps.com/map_v2.js?d=7yU4-8nEGjyXwXk3zoRxGmIsJofySGSt3WY9aqUCf20&cl=ffffff&w=a"></script>
  </div>
</div>

<div style="overflow:hidden;">

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for item in sorted_news %}
  <article style="margin-bottom:2rem;">
    <p style="color:#6c757d; font-size:0.85em; margin-bottom:0.2rem;">
      {{ item.date | date: "%B %d, %Y" }}
    </p>

    <h3 style="margin:0 0 0.3rem 0;">
      <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
    </h3>

    <div>
      {{ item.content | markdownify }}
    </div>
  </article>
  <hr>
{% endfor %}

</div>

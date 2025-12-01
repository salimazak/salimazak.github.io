---
title: "News"
layout: page
classes: no-sidebar
---

<div style="float:left; width:320px; margin-right:40px; margin-bottom:30px;">
  <img src="/images/SA2.JPG" alt="SA2" style="width:70%; border-radius:6px;">

  <!-- Visitor map sadece gizlendi — HTML duruyor ama görünmüyor -->
  <div style="margin-top:1rem; display:none;">
    <h3>Where My Visitors Are From</h3>
    <script type="text/javascript" id="clustrmaps"
      src="//clustrmaps.com/map_v2.js?d=7yU4-8nEGjyXwXk3zoRxGmIsJofySGSt3WY9aqUCf20&cl=ffffff&w=a">
    </script>
  </div>
</div>

<div style="overflow:hidden;">

<!-- Publications ile %100 aynı başlık -->
<h1>{{ page.title }}</h1>

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for item in sorted_news %}
  <article style="margin-bottom:2rem;">

    <!-- Haber başlığı siyah -->
    <h3 style="margin:0 0 0.25rem 0; color:#000;">
      <a href="{{ item.url | relative_url }}" style="color:#000; text-decoration:none;">
        {{ item.title }}
      </a>
    </h3>

    <!-- Tarih Talks formatı -->
    <p style="color:#6c757d; font-size:0.75em; margin-top:-0.25rem; margin-bottom:0.8rem;">
      {{ item.date | date: "%B %d, %Y" }}
    </p>

    <div>
      {{ item.content | markdownify }}
    </div>

  </article>

  <hr />

{% endfor %}

</div>


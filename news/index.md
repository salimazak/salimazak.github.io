---
title: "News"
layout: page
classes: no-sidebar
---

<div style="float:left; width:320px; margin-right:40px; margin-bottom:30px; margin-top:2rem; margin-left:60px;">
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
<!-- <h1>{{ page.title }}</h1> -->
<!-- Başlığı Publications gibi yap -->
<h1 style="margin-top: 2rem; margin-bottom: 2rem;">
  {{ page.title }}
</h1>

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for item in sorted_news %}

  <!-- ARTICLE + GÖRSEL YAPISI -->
  <article style="margin-bottom:2rem; display:flex; gap:20px;">
  {% if item.image %}
  <!-- Küçük görsel + popup için A etiketi -->
    <a href="/images/{{ item.image }}" class="image-popup"
       style="
    width:100px;
    height:100px;
    flex-shrink:0;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    overflow:hidden;
    background:#fff;
    border:1px solid #eee;
  ">
    <img src="/images/{{ item.image }}"
         alt="{{ item.title }}"
         style="width:100%; height:auto;">
  </div>
  {% endif %}
    <div>
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
    </div>

  </article>

  <hr />

{% endfor %}

</div>
<!-- ========================================= -->
<!--  LIGHTBOX (POPUP) AKTİF EDEN JAVASCRIPT  -->
<!-- ========================================= -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  if (window.jQuery && jQuery().magnificPopup) {
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-fade',
      zoom: {
        enabled: true,
        duration: 200
      }
    });
  }
});
</script>












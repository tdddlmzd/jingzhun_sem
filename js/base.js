$(function () {
  // 添加header
  var headerInner = `
  <div class="header_inner" class="clear">
    <img src="./img/logo.png" class="header_logo fl">
    <ul class="header_nav fl">
      <a href="./index.html" class="header_nav_item">产品介绍</a>
      <a href="./pier.html" class="header_nav_item">码头数据</a>
      <a href="./carrier.html" class="header_nav_item">船公司数据</a>
      <a href="https://tb.53kf.com/code/client/638bf58335176d932b75ab10e96545745/1" target="_blank" class="header_nav_item">申请试用</a>
      <a href="./about.html" class="header_nav_item">关于我们</a>
      <a href="./contact.html" class="header_nav_item">联系我们</a>
    </ul>
    <div class="header_phone fr">TEL: 021-65873950</div>
  </div>`;
  $('#header').append(headerInner);
  // 动态添加class
  var menuHref = ['index','pier','carrier','apply','about','contact'];
  for(var i = 0;i<menuHref.length;i++){
    if (window.location.href.indexOf(menuHref[i]) !== -1) {
      $('.header_nav_item').eq(i).addClass('header_nav_item_act')
    }else{
      $('.header_nav_item').eq(0).addClass('header_nav_item_act')
    }
    if (menuHref[i] == 'contact') {
      $('#header').css('background','#2D59BC')
    }
  }
  // 添加footer
  var footerInner = `
    <img class="footer_bg" src="./img/footer_bg.png">
    <div class="main_content">
      <div class="footer_main">
        <div class="foot_info">
          <h1>021-65873950</h1>
          <p>上海鲸准航运服务有限公司</p>
          <p>手机：18601733375</p>
          <p>Q Q：290002325</p>
          <p>企业邮箱：wangyang@ijingzhun.com</p>
          <p>公司地址：上海市虹口区广灵四路116号智慧桥创业园</p>
          <p>演示地址：www.ijingzhun.com</p>
        </div>
        <div class="foot_product">
          <h1>产品介绍</h1>
          <p>全球船期</p>
          <p>码头跟踪</p>
          <p>船舶计划</p>
          <p>船公司跟踪</p>
          <p>船舶AIS</p>
          <p>船舶档案</p>
          <p>报关状态</p>
        </div>
        <div class="foot_api">
          <h1>开放API</h1>
          <p>船期API</p>
          <p>码头API</p>
          <p>船公司API</p>
          <p>船舶计划API</p>
          <p>报关API</p>
        </div>
        <div class="foot_kefu">
          <h1>咨询客服</h1>
          <img class="erweima" src="./img/weixin.png">
          <p>扫一扫添加</p>
        </div>
      </div>
      <p class="footer_bottom">@2020 上海鲸准航运服务有限公司  版权所有 备案号:沪ICP备20010868号-2</p>
    </div>`
  if ($('#footer').length == 1) {
    $('#footer').append(footerInner);
  }
  //添加右边定位
  var rightInner = `
    <div id="right">
      <div class="right_box active_box">
        <i class="iconfont icon-kefu"></i>
        <p>在线咨询</p>
        <a target="_blank" href="https://tb.53kf.com/code/client/638bf58335176d932b75ab10e96545745/1"></a>
      </div>
      <div id="weixin" class="right_box">
        <i class="iconfont icon-weixin"></i>
        <p>微信咨询</p>
      </div>
      <div class="right_box fanhuidingbu">
        <i class="iconfont icon-fanhuidingbu-"></i>
        <p>回到顶部</p>
      </div>
      <div id="weixin_box">
        <img src="./img/weixin.png">
        <p>微信咨询</p>
        <p>(请备注咨询产品)</p>
      </div>
    </div>
  `
  $('.content').append(rightInner);
  $('#weixin').hover(
    function() {
      $('#weixin_box').show()
    }, function() {
      $('#weixin_box').hide()
    }  
  )
  $(window).on('scroll', function () {
    // 判断显示还是隐藏按钮
    if($(this).scrollTop() >= 400){
      $('.fanhuidingbu').show()
    }else {
      $('.fanhuidingbu').hide()
    }
  });
  $('.fanhuidingbu').on('click',function () {
    $('html, body').animate({scrollTop: 0}, 500);
  });
})

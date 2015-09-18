var frame = $('frame[name="main"]', top.document);
//frameset刷新时检查
frame.on("load", function(){
  var frameDocument = frame[0].contentDocument;
  // console.log(frameDocument);
  var jDoc = $(frameDocument);
  // console.log(jDoc.find('title').html());
  //检验是否为成绩单页
  if(jDoc.find('title').html()=='成绩单'){
    if(jDoc.find('body').children().eq(1)
    .children().html() ==
    "注意：申请办理成绩单的学生，请于提交申请之后尽快在本页面的最下方进行成绩单的确认。确认之后，已支付的成绩单办理申请方可生效。"){
      // alert("这是成绩单！");
      jDoc.find('tbody').children().each(function(){
        //遍历表格每一行
        var trs = $(this).children();
        if(trs.eq(1).is('th')){
          return;
        }
        switch (trs.length) {
          case 4:
            trs.eq(3).html("<b>4.0</b>");
            break;
          case 8:
            var score100 = trs.eq(3).text();
            if(!isNaN(parseFloat(score100))){
              trs.eq(3).text("100");
            }else{
              switch (score100) {
                case '优':
                case '良':
                case '及格': trs.eq(3).text('优');
                  break;
                case '合格':
                  break;
                default:
                  console.log("不在已知的成绩评定内");
              }
            }
            trs.eq(7).text('4.0');
            break;
          default:
            console.log("这行不知道怎么回事");
        }
        // console.log($(this).html());
        // console.log(trs.length);
      });
      console.log(jDoc.find('b').filter(":contains('GPA')").text("平均绩点(GPA):4.00"));
    }
    // $(frameDocument).find("body").html("<p>蛤蛤</p>");
  }
});

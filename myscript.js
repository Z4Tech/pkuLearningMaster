var frame = $('frame[name="main"]', top.document);
frame.on("load", function(){
  var frameDocument = frame[0].contentDocument;
  console.log(frameDocument);
  var jDoc = $(frameDocument);
  console.log(jDoc.find('title').html());
  if(jDoc.find('title').html()=='成绩单'){
    if(jDoc.find('body').children().eq(1)
    .children().html() ==
    "注意：申请办理成绩单的学生，请于提交申请之后尽快在本页面的最下方进行成绩单的确认。确认之后，已支付的成绩单办理申请方可生效。"){
      alert("这是成绩单！");
    }
    // $(frameDocument).find("body").html("<p>蛤蛤</p>");
  }
});

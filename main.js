auto.waitFor()
toast("running");
var height = device.height;
var width = device.width;

var change_pic = text("更换图片").findOnce();
if (change_pic) {

    //图片更换
    change_pic.click();
    sleep(1500);
    click(150, 1460)
    sleep(1500); 
    click(235, 283)
    sleep(1500);
    click(970, 138)
    sleep(1500); // 裁剪
    click(537, 2302)
    //图片更换完成

    sleep(1500)

    click(850, 1850)
    sleep(300);
    setText("汤臣一品一栋")
    click(1004, 2350)  //收掉Gboard

    sleep(1500);

    click(955, 1950)
    sleep(300);
    setText("1")//份
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);

    click(870, 2149) //发放方式
    sleep(300);
    click(587, 2133)

    //-------仅第一次，填写姓名
    sleep(1000);
    click(255, 434)
    sleep(1000);
    click(540, 1553) //剪贴板 请在下面填写你的姓名
    sleep(1000);
    click(1004, 2350)  //收掉Gboard
    sleep(1000);
    click(725, 2295)
    //--------中奖填写结束

    sleep(1300);

    swipe(3, height-500 , 3, height -1460, 1000)
    sleep(1300);
    click(560, 1350)

// ----第一个奖品结束

    sleep(600);

    click(850, 1850)
    sleep(600);
    setText("玛莎拉蒂一辆")
    click(1004, 2350)  //收掉Gboard

    sleep(300);

    click(955, 1950)
    sleep(300);
    setText("1")
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);

    click(870, 2149) //发放方式
    sleep(300);
    click(587, 2133)

    sleep(300);

    swipe(3, height-500 , 3, height -1460, 1000)
    sleep(300);
    click(560, 1350)

    // ----第二个奖品结束

    sleep(300);

    click(850, 1850)
    sleep(300);
    setText("保时捷一辆")
    click(1004, 2350)  //收掉Gboard

    sleep(300);

    click(955, 1950)
    sleep(300);
    setText("3")
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);

    click(870, 2149) //发放方式
    sleep(300);
    click(587, 2133)

    sleep(300);

    swipe(3, height-500 , 3, height -1460, 1000)
    sleep(300);
    click(560, 1350)

    // ----第三个奖品结束

    sleep(300);

    click(850, 1850)
    sleep(300);
    setText("交通大学保研机会一次")
    click(1004, 2350)  //收掉Gboard

    sleep(300);

    click(955, 1950)
    sleep(300);
    setText("3")
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);

    click(870, 2149) //发放方式
    sleep(300);
    click(587, 2133)

    sleep(300);

    swipe(3, height-500 , 3, height -1460, 1000)
    sleep(300);
    click(560, 1350)
    // ----第一个奖品结束

    sleep(300);

    click(850, 1850)
    sleep(300);
    setText("山东大学陪读一周体验")
    click(1004, 2350)  //收掉Gboard

    sleep(300);

    click(955, 1950)
    sleep(300);
    setText("3")
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);

    click(870, 2149) //发放方式
    sleep(300);
    click(587, 2133)

    sleep(300);

    swipe(3, height-500 , 3, height -1460, 1000)
    sleep(300);
    click(560, 1350)
    // ----第一个奖品结束

    sleep(300);

    click(850, 1850)
    sleep(300);
    setText("新鲜水果任选一公斤")
    click(1004, 2350)  //收掉Gboard

    sleep(300);

    click(955, 1950)
    sleep(300);
    setText("3")
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);

    click(870, 2149) //发放方式
    sleep(300);
    click(587, 2133)

    sleep(300);

    swipe(3, height-500 , 3, height -1460, 1000)
    sleep(300);
    click(560, 1350)
    // ----第一个奖品结束

    sleep(300);

    click(850, 1850)
    sleep(300);
    setText("大白菜一颗")
    click(1004, 2350)  //收掉Gboard

    sleep(300);

    click(955, 1950)
    sleep(300);
    setText("3")
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);

    click(870, 2149) //发放方式
    sleep(300);
    click(587, 2133)

    sleep(300);

    swipe(3, height-500 , 3, height -1470, 1000)
    sleep(300);
    click(560, 1350)
    // ----第一个奖品结束

    sleep(300);

    click(850, 1850)
    sleep(300);
    setText("核酸免做券一张")
    click(1004, 2350)  //收掉Gboard

    sleep(300);

    click(955, 1950)
    sleep(300);
    setText("3")
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);

    click(870, 2149) //发放方式
    sleep(300);
    click(587, 2133)

    sleep(300);

    swipe(3, height-500 , 3, height -1460, 1000)
    sleep(300);
    click(560, 1350)

    // ----鼓励奖
    sleep(300);
    click(700, 1710)
    sleep(200);
    click(850, 1850)
    sleep(300);
    setText("祝福语")
    click(1004, 2350)  //收掉Gboard

    sleep(1500);

    swipe(3, height-500 ,3, height-1460, 1000) //下滑一点
    sleep(300);
    click(855, 1860) //点击“即抽即中”
    sleep(300);
    swipe(3, height-500 , 3, height -1460, 1000)  //再下滑一点
    sleep(300);
    click(830, 1110)
    sleep(300);
    setText("50") //人数
    click(545, 1640) //收掉微信OS数字键盘
    sleep(300);
    click(700, 1680) //点击发起人
    sleep(3000);
    click(311, 868) //选择第二个，会自动确认返回
    
}
else {
    toast("未检查到页面");
    //中止脚本
    exit();
}
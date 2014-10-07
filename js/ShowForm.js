function CreateLayouts(paperShape, paper) {
    paperShape.setViewBox(0, 0, $('#hdrShapes').width(), 66, false);
    paperShape.setSize('100%', '100%');
    var rect = paperShape.set();
    rect.push(
        paperShape.rect(0, 0, 30, 30, 1).animate({ "fill-opacity": 0 }),
        paperShape.text(14, 48, "Rect").attr({ "font-size": 14 })
        ).translate(10, 10).click(function (event) {

            LoadRectangle(paper, "R0,35,35S0.7,0.7,35,35T-10.5,9.5", true);
        });

    var tri = paperShape.set();
    tri.push(
     paperShape.path("M0 30L30 30L15 0Z").transform("s1.25").animate({ "fill-opacity": 0 }),
     paperShape.text(32, 52, "Triangle")
     ).translate(70, 5).click(function (event) { LoadTriangle(paper, "R0,15,15S1.4,1.2,15,15T77,30", true); });

    var ellipse = paperShape.set();
    ellipse.push(
        paperShape.ellipse(17, 17, 15, 15).transform("s1.25").animate({ "fill-opacity": 0 }),
        paperShape.text(50, 52, "Ellipse")
        ).translate(130, 5).click(function (event) { LoadEllipse(paper, "R0,15,15S1.1331347106831837,1.3666666666666667,15,15T159,27.5", true); });

    var hexagon = paperShape.set();
    hexagon.push(
        paperShape.path("M7 0L22 0L30 15L22 30L7 30L0 15Z").transform("s1.25").animate({ "fill-opacity": 0 }),
        paperShape.text(61, 52, "Hexagon")
        ).translate(190, 5).click(function (event) { LoadHexagon(paper, "R0,15,15S1.2666666666666666,1.3,15,15T233,31.5", true); });

    var pentagon = paperShape.set();
    pentagon.push(
        paperShape.path("M15 0L30 15L22 30L7 30L0 15Z").transform("s1.25").animate({ "fill-opacity": 0 }),
        paperShape.text(76, 52, "Pentagon")
        ).translate(250, 5).click(function (event) { LoadPentagon(paper, "R0,15,15S1.2666666666666666,1.3,15,15T307,34.5", true); });

    var line = paperShape.set();
    line.push(
        paperShape.path("M0 0L30 30").transform("s1.25").animate({ "fill-opacity": 0 }),
        paperShape.text(84, 52, "Line")
        ).translate(310, 5).click(function (event) { LoadLine(paper, "R0,15,15S1.4,1.2666666666666666,15,15T380,26", true); });

    var text = paperShape.set();
    text.push(
        paperShape.text(89, 23, "A").attr({ "font-size": 45, "font-family": "Arial, Helvetica, sans-serif" }),
        paperShape.text(89, 52, "Text")
        ).translate(370, 5).click(function (event) {
            $.magnificPopup.open({
                items: {
                    src: '#magText',
                    type: 'inline'
                }
            });
        });

    var image = paperShape.set();
    image.push(
        paperShape.path("M2.5,4.833v22.334h27V4.833H2.5zM25.25,25.25H6.75V6.75h18.5V25.25zM11.25,14c1.426,0,2.583-1.157,2.583-2.583c0-1.427-1.157-2.583-2.583-2.583c-1.427,0-2.583,1.157-2.583,2.583C8.667,12.843,9.823,14,11.25,14zM24.251,16.25l-4.917-4.917l-6.917,6.917L10.5,16.333l-2.752,2.752v5.165h16.503V16.25z").transform("s1").animate({ "fill-opacity": 0 }),
        paperShape.text(15, 48, "Image")
        ).translate(502, 10).click(function (event) {
            $.magnificPopup.open({
                items: {
                    src: '#magImage',
                    type: 'inline'
                }
            });
        });

    var printer = paperShape.set();
    printer.push(
        paperShape.path("M37.333,79.334h37.334V84H37.333V79.334L37.333,79.334z M37.333,93.334h23.334v-4.668H37.333V93.334L37.333,93.334zM112,37.333v51.333c0,2.576-2.09,4.668-4.666,4.668h-14V112H18.667V93.335h-14C2.09,93.335,0,91.243,0,88.667V37.334c0-2.576,2.09-4.667,4.666-4.667h14V0h74.668v32.667h14C109.909,32.667,112,34.757,112,37.333z M28,32.667h56V9.333H28V32.667zM84,102.666V70H28v32.666H84z M102.667,46.666c0-2.576-2.09-4.667-4.666-4.667s-4.666,2.091-4.666,4.667s2.09,4.667,4.666,4.667S102.667,49.243,102.667,46.666z").transform("s0.25").animate({ "fill-opacity": 0 }),
        paperShape.text(-1520, 178, "Printer")
        ).translate(2100, -120).click(function (event) { LoadPrinter(paper, "R0,862.2111349999999,509.81880000000007S0.30728671958218856,0.29917920464891745,862.2111349999999,509.81880000000007T-285.5,-467", true); });

    var chair = paperShape.set();
    chair.push(
        paperShape.path("m 282.27575,393.29111 10.71455,-0.0515 5.4126,1.67898 5.61255,-0.0268 5.30071,-1.7304 2.42681,-3.76003 -0.1809,-5.45115 -2.72055,-5.09936 -2.93054,-3.73433 -4.13764,-1.6834 -6.68964,-1.67239 -6.63237,0.0318 -9.50612,-1.99868 -10.96971,0.0526 -17.27905,2.12719 -13.46418,1.76911 -7.98169,5.48991 -1.21958,1.71042 -1.16198,3.41342 1.45569,5.44508 2.9306,3.7343 5.41365,1.67899 9.38203,-1.74999 10.71444,-0.0514 0.3615,10.90377 -10.71446,0.0515 -5.30082,1.72844 -5.24324,3.43314 -2.62561,5.46541 -1.09525,5.45767 0.47466,14.3107 -8.16342,0.039 -0.4739,-14.31073 -2.73175,-5.43932 -2.86165,-1.69073 -4.13858,-1.68303 -2.49461,1.71488 -2.74982,1.71761 -1.21861,1.70929 -1.15169,3.75452 0.41833,12.60588 1.31034,39.52328 1.40015,3.74215 1.33165,1.69824 2.91916,3.39362 2.5511,-0.0121 4.08209,-0.0198 2.69232,-3.42053 2.37024,-5.46487 -0.54172,-16.35402 8.16343,-0.039 0.24842,7.49605 1.44544,5.1054 1.5236,7.48861 8.51356,10.52352 10.95179,7.10354 16.19498,3.67117 17.47768,-3.83275 11.7523,-7.21244 6.53827,-10.59572 2.13301,-12.6185 -0.24841,-7.49606 8.16251,-0.0394 0.54236,16.354 1.40026,3.74219 1.58669,1.69698 2.6639,3.39483 4.08228,-0.0197 2.80524,-0.0136 2.43799,-3.41931 2.74966,-1.71778 -0.12434,-3.74829 -1.31031,-39.52334 -0.41783,-12.6059 -0.12434,-3.74841 -2.86265,-1.68965 -2.60744,-1.69196 -2.86169,-1.68915 -4.02582,1.72219 -2.49447,1.71644 -1.47373,1.71045 -1.15171,3.75456 0.47429,14.31071 -8.16254,0.0394 -0.47427,-14.3107 -1.45679,-5.44544 -2.7316,-5.43969 -5.72552,-3.38053 -5.41269,-1.67706 -10.7145,0.0515 -0.3615,-10.90375 -5e-5,0 z m -49.65355,41.47294 0.71157,21.46449 -0.71157,-21.46449 z m -7.45186,21.50367 -0.71155,-21.46448 0.71155,21.46448 z m 92.1449,-21.91 0.71155,21.46448 -0.71155,-21.46448 z m -7.45083,21.50362 -0.71157,-21.46446 0.71157,21.46446 z m -53.09889,-62.44784 25.51023,-0.12239 -25.51023,0.12239 z m 25.87173,10.7814 -25.51023,0.1224 25.51023,-0.1224 z").transform("s0.25,0.25,70.247909,5.97729").animate({ "fill-opacity": 0 }),
        paperShape.text(-1455, 408, "Chair")
        ).translate(2100, -350).click(function (event) { LoadChair(paper, "R0.18875811333849413,271.46749000000005,433.7052950000002S0.2977574675939603,0.27207760204999376,271.46749000000005,433.7052950000002T372.75634,-387.58618", true); });

    var female = paperShape.set();
    female.push(
        paperShape.path("m 86.8416,270.35 0.013,113.385 c 0,20.4 -30.565,20.4 -30.565,0 l -0.013,-113.385 -40.504,0 43.339,-150.343 -6.812,0 -25.523,85.881 C 20.7016,224.62 -5.01541,216.925 0.868576,196.867 L 29.2066,103.564 c 3.038,-10.64 16.494,-29.503 39.786,-29.503 l 21.477,0 0,0 23.1154,0 c 23.084,0 36.601,19.022 40.094,29.503 l 28.35,93.212 c 5.67,20.047 -19.845,28.35 -25.92,8.809 l -25.514,-85.578 -7.376,0 43.804,150.343 -40.681,0 0,113.535 c 0,20.25 -30.4374,20.149 -30.4374,0 l 0,-113.535 -9.063,0 z m 4.792,-237.936 m 0,32.414 c 17.9024,0 32.4154,-14.511 32.4154,-32.414 C 124.049,14.514 109.536,0 91.6336,0 c -17.899,0 -32.413,14.514 -32.413,32.414 0,17.903 14.514,32.414 32.413,32.414 z").transform("s0.10,0.10,70.247909,5.97729").animate({ "fill-opacity": 0 }),
        paperShape.text(-5598, 88, "Female")
        ).translate(6300, -30).click(function (event) { LoadFemale(paper, "R0,91.42259162504254,199.5175S0.1304118528252651,0.09281140752064361,91.42259162504254,199.5175T606.25634,-154.41382", true); });

    var male = paperShape.set();
    male.push(
        paperShape.path("m 357.134,32.414 m 0,32.414 c 17.901,0 32.414,-14.511 32.414,-32.414 C 389.548,14.514 375.035,0 357.134,0 c -17.9,0 -32.414,14.514 -32.414,32.414 0,17.903 14.514,32.414 32.414,32.414 z m -34.187,9.112 c -22.808,0 -41.151,18.867 -41.151,42.4 l 0,100.3 c 0,19.5 28.136,19.5 28.136,0 l 0,-91.714 6.661,0 0,254.127 c 0,26.072 37.468,25.305 37.468,0 l 0,-148.776 6.453,0 0,148.776 c 0,25.305 37.673,26.072 37.673,0 l 0,-254.127 6.505,0 0,91.714 c 0,19.651 27.99,19.65 27.939,0 l 0,-99.7 c 0,-21.7 -16.614,-42.955 -41.656,-42.955 L 322.947,73.94 z").transform("s0.10,0.10,70.247909,5.97729").animate({ "fill-opacity": 0 }),
        paperShape.text(-5707, 88, "Male")
        ).translate(6450, -30).click(function (event) { LoadMale(paper, "R0,357.2135348049854,199.1602241793448S0.15802074193755797,0.09871561583321307,357.2135348049854,199.1602241793448T385.25634,-154.91382", true); });

    var door = paperShape.set();
    door.push(
        paperShape.path("m -527.06695,24.247633 c 0,23.720332 -22.12929,43.044536 -49.68388,43.386003 l -0.72567,-43.386003 z m 0.53218,-2.997651 0.0804,2.25148 -51.75559,0.143891 -0.0804,-2.25148 z").transform("s0.65,0.65,70.247909,5.97729").animate({ "fill-opacity": 0 }),
        paperShape.text(-950, 68, "Door")
        ).translate(1740, -10).click(function (event) { LoadDoor(paper, "R0,-552.372365,44.44180899999999S1,1.0862372766061081,-552.372365,44.44180899999999T1353,0", true); });

    var window = paperShape.set();
    window.push(
        paperShape.path("m -139.89778,293.81778 -12.23569,0 0,272.71793 11.51595,0 m -30.72636,-272.71793 12.23569,0 0,272.71793 -11.51594,0 m -1.30122,-285.44953 32.0276,0 0,298.18112 -32.0276,0 z").transform("s0.25,0.15,70.247909,5.97729").animate({ "fill-opacity": 0 }),
        paperShape.text(-2499, 359, "Window")
        ).translate(3350, -300).click(function (event) { LoadWindow(paper, "R0,-155.91155,430.17674000000017S0.4379847381633378,0.17164440189908758,-155.91155,430.17674000000017T1005.75634,-390.08618", true); });

    var wall = paperShape.set();
    wall.push(
        paperShape.path("m 576.46014,172.14444 8.84622,0 0,513.51221 -8.84622,0 z").transform("s0.25,0.09,70.247909,5.97729").animate({ "fill-opacity": 0 }),
        paperShape.text(-1903, 259, "V.Wall")
        ).translate(2800, -200).click(function (event) { LoadWall(paper, "R0,580.8832500000001,428.90054499999997S0.8869573671014417,0.6845255149823993,580.8832500000001,428.90054499999997T317.25634,-239.58618", true); });

    var wallHorizontal = paperShape.set();
    wallHorizontal.push(
        paperShape.rect(-2290, 224, 45, 4, 0).attr({ fill: 'black' }),
        paperShape.text(-2266, 259, "H.Wall")
        ).translate(3300, -200).click(function (event) { LoadHorzontalWall(paper, "R0,470,278S1,0.45,470,278T399,-258.5", true); });

    var cornerTable = paperShape.set();
    cornerTable.push(
        paperShape.path("m -1160.5214,130.22192 0,214.35817 0.7651,0 0,0.31605 214.35833,0 0,-71.46935 -143.67043,0 0,-143.20487 -71.453,0 z").transform("s0.25,0.09,70.247909,5.97729").animate({ "fill-opacity": 0 }),
        paperShape.text(-3740, 109, "Corner Table")
        ).translate(4700, -50).click(function (event) { LoadCornerTable(paper, "R0,200,332.36217999999997S0.32083333333333336,0.20833333333333337,200,332.36217999999997T776.5,-294", true); });

    var shapes = paperShape.set();
    var totalShapes = shapes.push(rect, tri, ellipse, hexagon, pentagon, line, text, image, printer, chair, female, male, door, window, wall, wallHorizontal, cornerTable);
    totalShapes.attr({ fill: 'Black', "stroke-width": 2, cursor: 'pointer', "font-size": 14, });
    shapes.click(function (e) {
    });
}

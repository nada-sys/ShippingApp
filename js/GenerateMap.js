function InuseCount(paper, w, h1, h2, x, y1, y2) {
    var In = paper.set();
    In.push(
        paper.rect(8, 12, 27, 19).attr({ fill: 'blue' }).data("id", "windowsPCFake").toBack(),
        paper.ellipse(37, 11, 15, 10).attr({ fill: 'blue' }).toFront(),
        paper.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14    c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30z M30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5    c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ fill: "blue", stroke: '#000000' }).translate(5, 10).toBack(),
        paper.text(37, 11, "Not").attr({ "font-size": 16, fill: 'white' }).data('id', 'count').toFront(),
        paper.text(22, 52, "In Use").attr({ "font-size": 16 })
        ).translate(350, 30);

    var Res = paper.set();
    Res.push(
        paper.rect(8, 12, 27, 19).attr({ fill: 'red' }).data("id", "windowsPCFake").toBack(),
        paper.ellipse(37, 11, 15, 10).attr({ fill: 'red' }).toFront(),
        paper.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14    c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30z M30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5    c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ fill: "red", stroke: '#000000' }).translate(5, 10).toBack(),
        paper.text(37, 11, "Not").attr({ "font-size": 16, fill: 'white' }).data('id', 'count').toFront(),
        paper.text(33, 52, "Reserved").attr({ "font-size": 16 })
        ).translate(450, 30);

    var Available = paper.set();
    Available.push(
        paper.rect(8, 12, 27, 19).attr({ fill: '#7AF131' }).data("id", "windowsPCFake").toBack(),
        paper.ellipse(37, 11, 15, 10).attr({ fill: 'green' }).toFront(),
        paper.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14    c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30z M30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5    c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ fill: "green", stroke: '#000000' }).translate(5, 10).toBack(),
        paper.text(37, 11, "Not").attr({ "font-size": 16, fill: 'white' }).data('id', 'count').toFront(),
        paper.text(32, 52, "Available").attr({ "font-size": 16 })
        ).translate(550, 30);

    var NotAvailable = paper.set();
    NotAvailable.push(
        paper.rect(8, 12, 27, 19).attr({ fill: 'black' }).data("id", "windowsPCFake").toBack(),
        paper.ellipse(37, 11, 15, 10).attr({ fill: 'black' }).toFront(),
        paper.path("M23,30h-2c-1.104,0-2-0.896-2-2v-3h-6v3c0,1.104-0.896,2-2,2H9c-0.553,0-1,0.448-1,1c0,0.553,0.447,1,1,1h14    c0.553,0,1-0.447,1-1C24,30.448,23.553,30,23,30z M30.25,0H1.75C0.784,0,0,0.84,0,1.875v19.25C0,22.16,0.784,23,1.75,23h28.5    c0.966,0,1.75-0.84,1.75-1.875V1.875C32,0.84,31.216,0,30.25,0z M30,21H2V2h28V21z").attr({ fill: "black", stroke: '#000000' }).translate(5, 10).toBack(),
        paper.text(37, 11, "Not").attr({ "font-size": 16, fill: 'white' }).data('id', 'count').toFront(),
        paper.text(45, 52, "Not Available").attr({ "font-size": 16 })
        ).translate(650, 30);

    var legend = paper.set();
    legend.push(paper.rect(x, y1, w, h1, 0).attr({ fill: 'Silver', "stroke-width": 5, "stroke": "gray" }).animate({ "fill-opacity": 0 }).toBack(),
        paper.rect(x, y2, w, h2, 0).attr({ fill: 'Silver', "stroke-width": 5, "stroke": "gray" }).animate({ "fill-opacity": 0 }).toBack(),
        In, Res, Available, NotAvailable);
    legend.translate(54, 535);

    return [In, Res, Available, NotAvailable];
}
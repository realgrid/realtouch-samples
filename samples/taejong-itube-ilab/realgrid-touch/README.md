# RealGrid-Touch

RealGrid-Touch is a data list component library for developing mobile web applications for business purposes.

## Install

```
npm i realgrid-touch
```

### License

> The License file is required for proper use. More information, visit: http://service.realgrid.com/start

## Usage

```ts

import RealGridTouch from "realgrid-touch"

data = RealGridTouch.createListData("",this.fields)
      .createView('view')
      .sort(['OILSTATN_NM'])
      .build();

if(data) {
    list = RealGridTouch.createListControl(document, "realtouch");
    list.setConfig(this.config);
    list.data = data;
}

... 

```

```ts
// config
this.config = {
      props: {
        numberFormat: ",",
        templates: {
          row: row_template,
          footer: footer_template,
        },
        rowCommands: {
          "@delete": { label: "DELETE" },
        },
        onRowSwipe: (args) => {
             console.log("SWIPE ROW", args.row);
        },
        onRowClick: (args) => {
            console.log("ROW: " + args.row);
        },
      },
      options: {
        row: {
          template: "row",
          commands: ["@info", "@delete"],
          clickAction: "info",
        },
        rowBar: {
          visible: true,
          display: "order",
          order: {
            suffix: ".",
            style: { fontSize: "19px", color: "#777" },
          },
        },
        scrollBar: true,
        scrollIndicator: {
          position: "top",
        },
        header: {
          visible: true,
          clickAction: "field",
          caption: "요소수 구입처",
          captionAlign: "center",
          buttons: [{
            name: "home",
            position: "head",
            label: "처음",
            onClick: this.homeClicked,
          }, {
            name: "edit",
            label: "편집",
            style: {
              color: "blue",
            },
            onClick: this.buttonClick,
          }],
        },
        footer: {
          visible: true,
          template: "footer",
          buttons: [{
            name: "delete",
            label: "삭제",
            position: "tail",
            visible: false,
            enabled: this.enabledDeleteButton,
            onClick: this.deleteClicked,
            style: {
              color: "red",
            },
          }],
          layoutParams: {
            checkVisible: this.checkVisible
          },
        },
        emptyPage: {
          onLoadClick: this.onLoadClick,
        },
        commandBox: {
          mode: "overlap",
        },
        infoPage: {
          header: { caption: "요소수 정보" },
          viewType: "B",
          showDirection: "right",
        },
      },
    };

```
### styles

- The themes are located in './dist'

```ts
import 'realgrid-touch/dist/realgrid-touch-style.css';
```

### Library Target

- index.esm.js for ES
- index.js for umd
## Exmaple

> visit: https://github.com/realgrid/realgrid-touch-examples

## Asking Questions

> support@realgrid.com
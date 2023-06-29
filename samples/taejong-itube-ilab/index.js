// API key
// const APIKey = "AIzaSyDYphsV4nfIVZg5c5HyBsfnO8a7TB5jZwk";
const APIKey = "AIzaSyCTwAUz1Ef2j0UVK7K3hLNlGg_gdgvJ-iU";

// 채널ID
// iLab
const channelID = "UCvUjS6oqUTkDY89nC8m8E6g";
// realgrid
// const channelID = "UCbs5mo-4A3ZyhZBA9JhPyfg";

// masterData API
const masterDatas = [];

// detailDatas API
const detailDatas = [];
const detailData = [];
const channelNameGet = [];
const thumbnail = [];

// 채널명
let channelName = '';


function init() {
  let master, detail, data, list;

  const master_template = {
    template: {
      layout: "hlinear",
      children: [
        {
          field: "snippet.title",
          style: {
            fontSize: "17px",
            fontWeight: "bold",
            color: "black",
          },
        },
      ],
    },
    params: {
 
    },
    rowStyle: {
      backgroundColor: "#ffffff",
      borderBottom: "0.1px solid #b5dcf3",
    },
  };

  const detail_template = {
    template: {
      layout: "hlinear",
      children: [
        {
          layout: "vlinear",
          children: [
            {
              field: "title",
              width: "95%",
              renderer: {
                wrap: true,
              },
              style: {
                fontWeight: "bold",
                fontSize: "20px",
              },
            },
            {
              field: "resourceId.videoId",
              renderer: {
                type: "html",
                html:
                  '<iframe width="350" height="250" src="https://www.youtube.com/embed/' +
                  "${videoIdValue}" +
                  '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>',
              },
            },
            {
              field: "description",
              width: "95%",
              renderer: {
                wrap: true,
              },
              image: {
                imageWidth: '20px',
                imageUrl: './img/ilabIcon.png',
              },
              style: {
                // fontWeight: "bold",
                fontSize: "16px",
                color: "#0b09a7",
              },
            },
          ],
        },
      ],
      style: {
        borderBottom: "0.1px solid #60a6d0",
      },
    },
    params: {
      videoIdValue: (args) => {
        const videoId = args.values.resourceId.videoId;
        return videoId;
      },
    },
    rowStyle: {
      fontSize: "15px",
      checked: {
        backgroundColor: "#0088ff20",
      },
    },
  };

  const header_template = {
    template: {
      layout: 'hlinear',
      children: [      
        {
          value: channelNameGet,
          width: "100%",
          style: {
            textAlign: "center",
          },
          renderer: {
          
          },
        },
      ],
    },
    Params: {
    
    }
  };
  
  const config = {
    props: {
      templates: {
        detail: detail_template,
        master: master_template,
        header_template,
      },
      onRowClick: (args) => {

      },
      onRowDetail: (args) => {
        
      },
    },
    options: {
      row: {
        template: "detail",
        clickable: true,
        style: {
          backgroundColor: '#f0f8fc',
        }
      },
      rowInfos: {
        master: { template: "master" },
      },
      header: {
        visible: true,
        template: "header_template",
        style: {
          fontWeight: "bold",
          fontSize: "20px",
          backgroundColor: "#88c7ec",
          padding: "20px",
        },
        renderer: {
          
        },
      },
    },
  };

  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&key=${APIKey}`,
    method: 'GET',
    dataType: 'JSON'
  }).done((getThumbnail) => {
    thumbnail.push(getThumbnail.items[0].snippet.thumbnails.default.url)
  });

  async function getPlaylistData(channelID, APIKey) {
    try {
      const masterResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelID}&key=${APIKey}&maxResults=30`);
      const masterData = await masterResponse.json();
      const masterItems = masterData.items;
      // channelName = masterData.items[0].snippet.channelTitle
      channelNameGet.push(masterData.items[0].snippet.channelTitle);
  
      const detailPromises = masterItems.map(async (masterItem) => {
        const detailResponseGet = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${masterItem.id}&key=${APIKey}`);
        const detailDataGet = await detailResponseGet.json();
        const detailItemsGet = detailDataGet.items;
  
        const detailPromises = detailItemsGet.map(async (detailItemGet) => {
          const detailResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&id=${detailItemGet.id}&key=${APIKey}`);
          const detailData = await detailResponse.json();
          const detailItems = detailData.items;
  
          return detailItems.map((detailItem) => {
            renameKey(detailItem.snippet, "playlistId", "id");
            return detailItem.snippet;
          });
        });
  
        const detailResults = await Promise.all(detailPromises);
        return detailResults.flat();
      });
  
      const detailDatas = (await Promise.all(detailPromises)).flat();
  
      const master = RealTouch.createListData("master", null, masterItems);
      const detail = RealTouch.createListData("detail", null, detailDatas);
      const data = RealTouch.createDataLink("main", master, {
        data: detail,
        keyFields: ["id"],
      });
      
      const list = RealTouch.createListControl(document, "realtouch");
      list.setConfig(config);
      list.data = data;
      list.dataGroupBy({});
      list.collapseAll();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  getPlaylistData(channelID, APIKey);
  
}

//Json key 값 변경
function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

function renameUrl(url, value) {
  for (j = 0; (j = value.length); j++) {}
}

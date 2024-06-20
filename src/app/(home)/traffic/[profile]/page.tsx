"use client"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { TrafficTable } from "@/components/custom/traffic/traffic-table"
import { browsingColumns } from "@/components/custom/traffic/browsingColumns"
import { BrowsingData } from "@/types/types"
import { FileOpData } from "@/types/types"
import {fileOpColumns} from "@/components/custom/traffic/fileOpColumns"
const fileData: FileOpData[] = [
  {
    "status": "enable",
    "traffictype": "ftp",
    "host": "hq-ubuntu-media-51.dt1.wifi.arista.cloud",
    "port": "",
    "interval": 121,
    "operation": "download",
    "mode": "",
    "filesize": 25,
    "packetsize": 0,
    "username": "ftptest",
    "password": "welcome",
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "ftp",
    "host": "hq-ubuntu-media-41.dt1.wifi.arista.cloud",
    "port": "",
    "interval": 240,
    "operation": "upload",
    "mode": "",
    "filesize": 25,
    "packetsize": 0,
    "username": "ftptest",
    "password": "welcome",
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "tftp",
    "host": "hq-ubuntu-media-31.dt1.wifi.arista.cloud",
    "port": "69",
    "interval": 360,
    "operation": "download",
    "mode": "octet",
    "filesize": 25,
    "packetsize": 1200,
    "username": "",
    "password": "",
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "tftp",
    "host": "hq-ubuntu-media-41.dt1.wifi.arista.cloud",
    "port": "69",
    "interval": 480,
    "operation": "upload",
    "mode": "octet",
    "filesize": 25,
    "packetsize": 1200,
    "username": "",
    "password": "",
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "sftp",
    "host": "hq-ubuntu-media-11.dt1.wifi.arista.cloud",
    "port": "",
    "interval": 240,
    "operation": "download",
    "mode": "",
    "filesize": 25,
    "packetsize": 0,
    "username": "ftptest",
    "password": "welcome",
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "sftp",
    "host": "hq-ubuntu-media-21.dt1.wifi.arista.cloud",
    "port": "",
    "interval": 240,
    "operation": "upload",
    "mode": "",
    "filesize": 25,
    "packetsize": 0,
    "username": "root",
    "password": "welcome",
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  }
]
const data: BrowsingData[] = [
  {
    "status": "enable",
    "traffictype": "streaming",
    "url": "https://www.youtube.com/shorts/MnXQqXkFe5M",
    "interval": 181,
    "browser": "chrome",
    "browsermode": "foreground",
    "actions": [
      {
        "action": {
          "click": {
            "locator": "#movie_player \u003E div.ytp-cued-thumbnail-overlay \u003E button"
          }
        }
      }
    ],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "streaming",
    "url": "https://www.twitch.tv/dezignful",
    "interval": 800,
    "browser": "firefox",
    "browsermode": "foreground",
    "actions": [
      {
        "action": {
          "click": {
            "locator": "#movie_player \u003E div.ytp-cued-thumbnail-overlay \u003E button"
          }
        }
      }
    ],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "streaming",
    "url": "https://www.youtube.com/shorts/Sm8ik9f-rkM",
    "interval": 360,
    "browser": "firefox",
    "browsermode": "foreground",
    "actions": [
      {
        "action": {
          "click": {
            "locator": "#movie_player \u003E div.ytp-cued-thumbnail-overlay \u003E button"
          }
        }
      }
    ],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "streaming",
    "url": "https://hq-ubuntu-media-31.dt1.wifi.arista.cloud/4KHoneyBees.mp4",
    "interval": 240,
    "browser": "firefox",
    "browsermode": "foreground",
    "actions": [
      {
        "action": {
          "click": {
            "locator": "#movie_player \u003E div.ytp-cued-thumbnail-overlay \u003E button"
          }
        }
      }
    ],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "speedtest",
    "url": "https://fast.com",
    "interval": 1800,
    "browser": "firefox",
    "browsermode": "background",
    "actions": [],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "speedtest",
    "url": "https://speedtest.net",
    "interval": 7200,
    "browser": "webkit",
    "browsermode": "background",
    "actions": [],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "streaming",
    "url": "https://hq-ubuntu-media-21.dt1.wifi.arista.cloud/4KUltraHD.mp4",
    "interval": 1900,
    "browser": "firefox",
    "browsermode": "foreground",
    "actions": [],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "browsing",
    "url": "https://rakuten.co.jp",
    "interval": 400,
    "browser": "firefox",
    "browsermode": "background",
    "actions": [],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "browsing",
    "url": "https://surveymonkey.com",
    "interval": 300,
    "browser": "firefox",
    "browsermode": "background",
    "actions": [],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "browsing",
    "url": "https://one.com",
    "interval": 200,
    "browser": "webkit",
    "browsermode": "background",
    "actions": [],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  },
  {
    "status": "enable",
    "traffictype": "browsing",
    "url": "https://cnet.com",
    "interval": 100,
    "browser": "chrome",
    "browsermode": "background",
    "actions": [],
    "traffic_schedule": {
      "traffic_default": false,
      "weekdays_schedule": {
        "Friday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Monday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Saturday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Sunday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Thursday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Tuesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        },
        "Wednesday": {
          "10": true,
          "11": true,
          "12": true,
          "13": true,
          "14": true,
          "15": true,
          "16": true,
          "17": true,
          "18": true,
          "19": true,
          "20": true,
          "8": true,
          "9": true
        }
      }
    }
  }
]

export default function page({params}: {params: {trafficProfileID : number}}) {
  const [trafficStatus, setTrafficStatus] = useState(true)
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-800">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Traffic Profile {params.trafficProfileID} </h1>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-6 space-y-6">

        {/* Global Status */}
        <Collapsible className="w-full" defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <ActivityIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="font-medium">Global Status</span>
            </div>
            <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform [&[data-state=open]]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Global Status</span>
              <div className="flex items-center space-x-2">
                <Switch checked={trafficStatus} onCheckedChange={() => setTrafficStatus(!trafficStatus)} id="globalStatus" />
                {trafficStatus ?
                  <Label className="font-medium text-green-600" htmlFor="globalStatus">Online</Label> :
                  <Label className="font-medium text-red-600" htmlFor="globalStatus">Offline</Label>
                }
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Browsing data  */}
        <Collapsible className="w-full" defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <ChromeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="font-medium">Browsing</span>
            </div>
            <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform [&[data-state=open]]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 space-y-4">
            <div className="w-full border rounded-md shadow-sm dark:border-gray-800">
                {/* Dynamic/generic props */}
              <TrafficTable<BrowsingData> columns={browsingColumns} data={data} />

            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* File op */}
        <Collapsible className="w-full" defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="font-medium">File Operation</span>
            </div>
            <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform [&[data-state=open]]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 space-y-4">
            <div className="w-full border rounded-md shadow-sm dark:border-gray-800">
                {/* Dynamic/generic props */}
              <TrafficTable<FileOpData> columns={fileOpColumns} data={fileData} />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </main>
    </div>
  )
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

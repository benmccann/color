window.BENCHMARK_DATA = {
  "lastUpdate": 1581088444113,
  "repoUrl": "https://github.com/kurkle/color",
  "entries": {
    "HEX parsing": [
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "feb3b2c2740eafab82ff9cd948a08385338ce17a",
          "message": "Benchmark comparison",
          "timestamp": "2020-02-07T11:41:57+02:00",
          "tree_id": "4fe73ed45f36bbbd8993251712b8095fa7a57571",
          "url": "https://github.com/kurkle/color/commit/feb3b2c2740eafab82ff9cd948a08385338ce17a"
        },
        "date": 1581068700633,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4127538,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3305683,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 12797277,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map obj",
            "value": 12956488,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10862848,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "90 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "95d9d190114e1bb3d21f9d78c2c2807fae9bcd3e",
          "message": "Optimize opaquer / clearer",
          "timestamp": "2020-02-07T12:23:00+02:00",
          "tree_id": "264eefd40b4b0ddb3e26113f1aabc601f0f0b0df",
          "url": "https://github.com/kurkle/color/commit/95d9d190114e1bb3d21f9d78c2c2807fae9bcd3e"
        },
        "date": 1581071166709,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3870977,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3199517,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "map",
            "value": 11807806,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "map obj",
            "value": 11960715,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10560991,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "85 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "7b35c7b5e7f7b689aea2978a8703ebb164214373",
          "message": "Chore",
          "timestamp": "2020-02-07T12:53:54+02:00",
          "tree_id": "5653a36e0e3c1976f75c277f4a50cd15ebc45ec3",
          "url": "https://github.com/kurkle/color/commit/7b35c7b5e7f7b689aea2978a8703ebb164214373"
        },
        "date": 1581073015541,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4166410,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3288593,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 12458351,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map obj",
            "value": 12513468,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10510595,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "bd7cf21a9f44bea0ea5f9c1efcfae8a9ed45c7cb",
          "message": "Add benchmarks for hex/hsl/rgbString",
          "timestamp": "2020-02-07T13:28:25+02:00",
          "tree_id": "6a2415f625f2111c58a2555e0fa91828a0202a32",
          "url": "https://github.com/kurkle/color/commit/bd7cf21a9f44bea0ea5f9c1efcfae8a9ed45c7cb"
        },
        "date": 1581075092185,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3782931,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "parseInt slice",
            "value": 2950538,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "map",
            "value": 11319599,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map obj",
            "value": 11424966,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10078832,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "92823e79b4c6995671d10c19cca4be4686e99bc0",
          "message": "Update readme",
          "timestamp": "2020-02-07T15:50:45+02:00",
          "tree_id": "23651a50a644713a4d023f0059324d0f50c341ed",
          "url": "https://github.com/kurkle/color/commit/92823e79b4c6995671d10c19cca4be4686e99bc0"
        },
        "date": 1581083641239,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3865086,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3083602,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map",
            "value": 11794473,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map obj",
            "value": 11855134,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10181373,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "93 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "6e7a64f9350c182bd467c179360c35a8a56cd318",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:09:41+02:00",
          "tree_id": "36443677295334ab91ae8049a4904125941ed94a",
          "url": "https://github.com/kurkle/color/commit/6e7a64f9350c182bd467c179360c35a8a56cd318"
        },
        "date": 1581084773495,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4204040,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3377171,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "map",
            "value": 12388354,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "map obj",
            "value": 12767561,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10812402,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "85 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "e7c5ce659fe1dffae0cfd49b5b8f3b29d0f7bfba",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:14:49+02:00",
          "tree_id": "56eb45faab1c5a42980f5ab1b3242d40863e8206",
          "url": "https://github.com/kurkle/color/commit/e7c5ce659fe1dffae0cfd49b5b8f3b29d0f7bfba"
        },
        "date": 1581085073020,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4144997,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3332026,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map",
            "value": 12659961,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "map obj",
            "value": 12685793,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10806331,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "93 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "0ea9ffccf8679f5f26f3aa56ecb85a2279e49e93",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:18:06+02:00",
          "tree_id": "75d863ebe35f50fe12be1a86679d479a433659cb",
          "url": "https://github.com/kurkle/color/commit/0ea9ffccf8679f5f26f3aa56ecb85a2279e49e93"
        },
        "date": 1581085269399,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3818807,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3059243,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "map",
            "value": 11859041,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "map obj",
            "value": 11944117,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9909908,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "92 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "7f4b7524c3cc40566865b11e06cf7dea473c0f72",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:23:16+02:00",
          "tree_id": "7032babc13e1d0cb8a4c39732728308370b76609",
          "url": "https://github.com/kurkle/color/commit/7f4b7524c3cc40566865b11e06cf7dea473c0f72"
        },
        "date": 1581085579689,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 3736881,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3026895,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map",
            "value": 11448940,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "map obj",
            "value": 11634739,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 9911209,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "89 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "7c3adaf100d714d67e774dd0c2b6139522fe04e8",
          "message": "Change from min to minzip shield",
          "timestamp": "2020-02-07T16:29:24+02:00",
          "tree_id": "35bc6bc5e92c1003ed4909d4cef891ddb34efa3c",
          "url": "https://github.com/kurkle/color/commit/7c3adaf100d714d67e774dd0c2b6139522fe04e8"
        },
        "date": 1581085944638,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4111793,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3282424,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map",
            "value": 12631227,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "map obj",
            "value": 12804542,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 10918675,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "90 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "d841584e61cd49e86b99ee84e05b910f166eff0c",
          "message": "Add size visualizations",
          "timestamp": "2020-02-07T17:11:03+02:00",
          "tree_id": "55450e2ac0008ab48e514f67dffacd8d825db971",
          "url": "https://github.com/kurkle/color/commit/d841584e61cd49e86b99ee84e05b910f166eff0c"
        },
        "date": 1581088443762,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parseInt +",
            "value": 4347878,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "parseInt slice",
            "value": 3487358,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map",
            "value": 13389633,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "map obj",
            "value": 13302034,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "parseInt + shift",
            "value": 11127932,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "88 samples"
          }
        ]
      }
    ],
    "Comparison": [
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "feb3b2c2740eafab82ff9cd948a08385338ce17a",
          "message": "Benchmark comparison",
          "timestamp": "2020-02-07T11:41:57+02:00",
          "tree_id": "4fe73ed45f36bbbd8993251712b8095fa7a57571",
          "url": "https://github.com/kurkle/color/commit/feb3b2c2740eafab82ff9cd948a08385338ce17a"
        },
        "date": 1581069043969,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 31033754,
            "range": "±5.10%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 809755,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 631314,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 612076,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2735523,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2524369,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1835699,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8251615,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 476015,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 544715,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 515094,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1888701,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1504550,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6910381,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 497976,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 713686,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 704358,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2444966,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3160436,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2135204,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4897860,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 465340,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 627561,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 629398,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1904980,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1733143,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2833098,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 467621,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 790116,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 104118,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 970425,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1238210,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2084881,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1798658,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 448365,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 682626,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 101341,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 712083,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 894492,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1623111,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4628847,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1599671,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 468412,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 631214,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14686779,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 852351,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 667404,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 681424,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8343753,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14816510,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3140181,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 590191872,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 799098,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 52052427,
            "range": "±6.73%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 73980364,
            "range": "±2.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 758046,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4683082,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 929879,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4654682,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 393955,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 942441,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4897589,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 283837,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 866627,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4664660,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 280562,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 878417,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 12318214,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12731499,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21298105,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 60397552,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2424575,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 331681,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 629654,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3041795,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2133494,
            "range": "±3.63%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "95d9d190114e1bb3d21f9d78c2c2807fae9bcd3e",
          "message": "Optimize opaquer / clearer",
          "timestamp": "2020-02-07T12:23:00+02:00",
          "tree_id": "264eefd40b4b0ddb3e26113f1aabc601f0f0b0df",
          "url": "https://github.com/kurkle/color/commit/95d9d190114e1bb3d21f9d78c2c2807fae9bcd3e"
        },
        "date": 1581071510493,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28203593,
            "range": "±4.66%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 771502,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 611936,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 542503,
            "range": "±3.49%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2550259,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2482493,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1798165,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7865719,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 455954,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 522774,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 494101,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1932714,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1483186,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 5705132,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 477663,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 682325,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 681211,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2341383,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2938834,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2037145,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4826130,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 448900,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 654962,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 619404,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1903634,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1744658,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2612262,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 487812,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 798488,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 99132,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 887656,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1190413,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2074561,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1753520,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 446969,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 638732,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 89248,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 628392,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 814404,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1733427,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4799870,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1502901,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 463648,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 620251,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14427747,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 787108,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 654994,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 659320,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7265761,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14785555,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2789731,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 631296752,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 762190,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 70666602,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 87536470,
            "range": "±19.08%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 702542,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4727069,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 837456,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4238148,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 394326,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 865501,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4600158,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 271368,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 802157,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4330805,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 271024,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 775328,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 97792572,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12610323,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21635395,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 52824346,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2267767,
            "range": "±5.32%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 305893,
            "range": "±2.44%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 580230,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2752352,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1870762,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "67 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "7b35c7b5e7f7b689aea2978a8703ebb164214373",
          "message": "Chore",
          "timestamp": "2020-02-07T12:53:54+02:00",
          "tree_id": "5653a36e0e3c1976f75c277f4a50cd15ebc45ec3",
          "url": "https://github.com/kurkle/color/commit/7b35c7b5e7f7b689aea2978a8703ebb164214373"
        },
        "date": 1581073356586,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 30126654,
            "range": "±6.19%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 801083,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 613952,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 607441,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2741168,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2500800,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1827669,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8115271,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 466253,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 530080,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 510455,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1885838,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1541554,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 7232974,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 479863,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 715425,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 708171,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2415301,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3175628,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2126190,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4659488,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 456070,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 650870,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 629857,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1941850,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1795468,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2834833,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 465002,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 803053,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 104236,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 1003414,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1192257,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2199021,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1832718,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 455698,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 678063,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 103054,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 707598,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 872065,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1660177,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4537911,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1520856,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 481484,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 617238,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16212515,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 896895,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 656618,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 673932,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8754419,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15187228,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3172359,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 590030287,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 819797,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 76759118,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 285128880,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 738226,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4735830,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 930315,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4340741,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 398292,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 916521,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4773154,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 276006,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 854831,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4460628,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 278612,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 862142,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 60293007,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12452916,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21807873,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 58963706,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2554504,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 326969,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 614379,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3394743,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2167915,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "bd7cf21a9f44bea0ea5f9c1efcfae8a9ed45c7cb",
          "message": "Add benchmarks for hex/hsl/rgbString",
          "timestamp": "2020-02-07T13:28:25+02:00",
          "tree_id": "6a2415f625f2111c58a2555e0fa91828a0202a32",
          "url": "https://github.com/kurkle/color/commit/bd7cf21a9f44bea0ea5f9c1efcfae8a9ed45c7cb"
        },
        "date": 1581075462621,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26744106,
            "range": "±5.80%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 749256,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 599654,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 580923,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2546954,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2424381,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1717310,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7156775,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 436222,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 519836,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 485160,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1860643,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1256619,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6037136,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 468027,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 677457,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 584448,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2275157,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2883015,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1986883,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4595932,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 437058,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 617081,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 611946,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1848130,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1647571,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2650181,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 455765,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 777118,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 99884,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 893564,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1140101,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2001428,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1707748,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 430753,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 654363,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 79388,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 617070,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 823687,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1593571,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4504776,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1368823,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 439647,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 557908,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 11631727,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 759990,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 639995,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 620105,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 6717532,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13487525,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2654904,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 647254953,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 767189,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 65120633,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 139629453,
            "range": "±23.82%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 695088,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4596349,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 857119,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4482313,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 378046,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 850563,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4578444,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 271980,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 791078,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4316670,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 271057,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 792645,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 51849804,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12516275,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 21516118,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 49972518,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2406064,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 318557,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 591061,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2901561,
            "range": "±5.36%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1811260,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8264800,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1684265,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8320529,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 10734825,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 11537799,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 10547541,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "92823e79b4c6995671d10c19cca4be4686e99bc0",
          "message": "Update readme",
          "timestamp": "2020-02-07T15:50:45+02:00",
          "tree_id": "23651a50a644713a4d023f0059324d0f50c341ed",
          "url": "https://github.com/kurkle/color/commit/92823e79b4c6995671d10c19cca4be4686e99bc0"
        },
        "date": 1581084011595,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28073285,
            "range": "±6.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 748382,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 591670,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 553419,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2530395,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2358943,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1680505,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7341831,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 425868,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 518588,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 495238,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1832766,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1398112,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6499204,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 463540,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 659019,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 664693,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2243090,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2985833,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2014345,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4491710,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 425144,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 609141,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 601375,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1799557,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1671805,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2663487,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 435152,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 754095,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 98644,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 931869,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1209855,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2025116,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1661661,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 423583,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 645060,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 94807,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 649228,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 850980,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1570280,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4463967,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1503679,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 439597,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 574372,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 13486784,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 801794,
            "range": "±3.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 625863,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 637539,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7916526,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14423561,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2998302,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 554860833,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 771833,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 60396946,
            "range": "±6.47%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 71351411,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 724902,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4397528,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 796663,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4271001,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 396658,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 804958,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4478927,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 258390,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 820872,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4260046,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 260095,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 822688,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 85351937,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11564325,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 20301759,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 46797411,
            "range": "±5.23%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2177872,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 291236,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 585031,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2941016,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2055696,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9286114,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1605297,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8216997,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11920651,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12747840,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11121824,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "6e7a64f9350c182bd467c179360c35a8a56cd318",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:09:41+02:00",
          "tree_id": "36443677295334ab91ae8049a4904125941ed94a",
          "url": "https://github.com/kurkle/color/commit/6e7a64f9350c182bd467c179360c35a8a56cd318"
        },
        "date": 1581085142147,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26570627,
            "range": "±5.62%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 832429,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 662926,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 680123,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2838016,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2701650,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1894105,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8138430,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 496075,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 588690,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 580031,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1997799,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1605361,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6137014,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 513996,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 755933,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 775318,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2590366,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3289790,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2190423,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4956773,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 491337,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 705964,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 687887,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 2079864,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1845034,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2956128,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 473837,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 840590,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 101765,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 995470,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1220572,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2266928,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1896082,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 484050,
            "range": "±2.27%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 739614,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 103106,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 697658,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 900550,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1794593,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 5061146,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1596812,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 467233,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 616364,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16106484,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 893976,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 689809,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 692051,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7817552,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 15055692,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2872697,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 700409459,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 902707,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 73536910,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 313919532,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 773496,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4999152,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 942019,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 5086122,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 445734,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 945635,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 5570294,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 303130,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 862684,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 5137207,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 304927,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 852709,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 114050129,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 13871403,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 22118708,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 54084460,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2568325,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 348672,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 647019,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3439541,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2187326,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8764577,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1832422,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 9651230,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12555894,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12844513,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12156474,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "e7c5ce659fe1dffae0cfd49b5b8f3b29d0f7bfba",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:14:49+02:00",
          "tree_id": "56eb45faab1c5a42980f5ab1b3242d40863e8206",
          "url": "https://github.com/kurkle/color/commit/e7c5ce659fe1dffae0cfd49b5b8f3b29d0f7bfba"
        },
        "date": 1581085443124,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 29829294,
            "range": "±6.52%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 767527,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 597625,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 588180,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2699427,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2524830,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1776479,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8169039,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 455545,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 512979,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 490681,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1861615,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1445002,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6758710,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 479162,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 679563,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 689790,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2419602,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3167379,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2156877,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4922273,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 444042,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 629855,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 620002,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1932924,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1755243,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2851895,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 418506,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 808457,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 101050,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 945356,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1259661,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2181843,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1780292,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 413884,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 686641,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 101233,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 700875,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 912681,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1634579,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4542869,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1546475,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 479612,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 610395,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 16656296,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 857892,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 635236,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 643029,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7704946,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 14341139,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3160828,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 587879201,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 817924,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 75825109,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 283954175,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 774685,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4440253,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 911007,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4606908,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 395077,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 931595,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4773265,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 271880,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 864798,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4501079,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 269050,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 857496,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 90790148,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12532263,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 22089597,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 59680089,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2521396,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 322465,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 629422,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3181675,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2132612,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9706134,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1837891,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8866728,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 12601798,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13294608,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12753991,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "0ea9ffccf8679f5f26f3aa56ecb85a2279e49e93",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:18:06+02:00",
          "tree_id": "75d863ebe35f50fe12be1a86679d479a433659cb",
          "url": "https://github.com/kurkle/color/commit/0ea9ffccf8679f5f26f3aa56ecb85a2279e49e93"
        },
        "date": 1581085639887,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 26298036,
            "range": "±8.67%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 716970,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 569087,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 548003,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2464252,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2289390,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1647622,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7273684,
            "range": "±4.31%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 422863,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 500061,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 484332,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1710009,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1334203,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6499614,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 448679,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 664283,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 644300,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2252453,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2962933,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1990688,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4674273,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 417942,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 598463,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 585272,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1731678,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1598577,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2612947,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 417948,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 751265,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 98746,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 923924,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1148999,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2045673,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1705287,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 420132,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 649849,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 85365,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 652036,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 825027,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1511432,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4502610,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1457543,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 445663,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 552351,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 14899533,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 817922,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 609186,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 623229,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7832122,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13211699,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2908804,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 551503828,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 709272,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 49460325,
            "range": "±6.68%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 69451169,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 720382,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4253946,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 880403,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4239698,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 395952,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 885433,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4378874,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 257296,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 805746,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4200151,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 237771,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 787118,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 85761637,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11794055,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 19883462,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 55260363,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2330272,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 281864,
            "range": "±1.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 588632,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3062457,
            "range": "±4.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1932968,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9093265,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1658811,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8168140,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11792853,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12548348,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11654683,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "7f4b7524c3cc40566865b11e06cf7dea473c0f72",
          "message": "Shields!",
          "timestamp": "2020-02-07T16:23:16+02:00",
          "tree_id": "7032babc13e1d0cb8a4c39732728308370b76609",
          "url": "https://github.com/kurkle/color/commit/7f4b7524c3cc40566865b11e06cf7dea473c0f72"
        },
        "date": 1581085948790,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 28462372,
            "range": "±4.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 722791,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 560001,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 547629,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2437365,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2307286,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1652832,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 7393239,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 436786,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 484385,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 465682,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1698935,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1341974,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6124381,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 435268,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 621449,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 648946,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2170649,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 2791604,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 1941517,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4583857,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 430186,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 590425,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 573072,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1742795,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1653164,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2616542,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 428519,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 739176,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 95631,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 892551,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1137302,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2045283,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1694397,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 418492,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 633236,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 74780,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 623701,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 846607,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1538193,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4331365,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1439922,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 456428,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 551835,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 15578150,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 815553,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 585567,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 630220,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 7545953,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 13978495,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 2888995,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 550012564,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 721131,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 50253056,
            "range": "±7.07%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 69089093,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 688086,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4284323,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 881187,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4194213,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 387184,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 863692,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4301816,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 259951,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 777262,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4169313,
            "range": "±1.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 260499,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 792328,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 54780335,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 11499058,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 20174721,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 54789319,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2342927,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 304473,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 574079,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 2951201,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 1859419,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 8211646,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1687373,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8330074,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 11797361,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 12226658,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 11787477,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "committer": {
            "email": "jukka.kurkela@gmail.com",
            "name": "Jukka Kurkela",
            "username": "kurkle"
          },
          "distinct": true,
          "id": "7c3adaf100d714d67e774dd0c2b6139522fe04e8",
          "message": "Change from min to minzip shield",
          "timestamp": "2020-02-07T16:29:24+02:00",
          "tree_id": "35bc6bc5e92c1003ed4909d4cef891ddb34efa3c",
          "url": "https://github.com/kurkle/color/commit/7c3adaf100d714d67e774dd0c2b6139522fe04e8"
        },
        "date": 1581086313803,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "parse #d6F|@kurkle/color",
            "value": 30595810,
            "range": "±6.84%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "parse #d6F|chartjs-color",
            "value": 793021,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|tinycolor2",
            "value": 613550,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #d6F|chroma-js",
            "value": 614443,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #d6F|color-parse",
            "value": 2676921,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "parse #d6F|color-parser",
            "value": 2498496,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #d6F|color-string",
            "value": 1781496,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #AABB|@kurkle/color",
            "value": 8168387,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chartjs-color",
            "value": 481997,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|tinycolor2",
            "value": 529531,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #AABB|chroma-js",
            "value": 515838,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #AABB|color-parse",
            "value": 1888556,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #AABB|color-string",
            "value": 1478788,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|@kurkle/color",
            "value": 6818981,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse #555555|chartjs-color",
            "value": 492373,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #555555|tinycolor2",
            "value": 693361,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|chroma-js",
            "value": 694786,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #555555|color-parse",
            "value": 2395690,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse #555555|color-parser",
            "value": 3101866,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse #555555|color-string",
            "value": 2100873,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|@kurkle/color",
            "value": 4802164,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|chartjs-color",
            "value": 455714,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse #a7a7a779|tinycolor2",
            "value": 639470,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "parse #a7a7a779|chroma-js",
            "value": 620362,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse #a7a7a779|color-parse",
            "value": 1907090,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse #a7a7a779|color-string",
            "value": 1750879,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|@kurkle/color",
            "value": 2866693,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chartjs-color",
            "value": 476664,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|tinycolor2",
            "value": 788388,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|chroma-js",
            "value": 103524,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parse",
            "value": 971795,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-parser",
            "value": 1249687,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgb(255, 0, 0)|color-string",
            "value": 2229821,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|@kurkle/color",
            "value": 1790064,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chartjs-color",
            "value": 462666,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|tinycolor2",
            "value": 697016,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|chroma-js",
            "value": 83072,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parse",
            "value": 708533,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-parser",
            "value": 915214,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse rgba(255, 0, 0, 0.5)|color-string",
            "value": 1716378,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|@kurkle/color",
            "value": 4489202,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|chartjs-color",
            "value": 1554804,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|tinycolor2",
            "value": 481477,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "parse hsla(240, 100, 60, 0.5)|color-parse",
            "value": 610650,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|@kurkle/color",
            "value": 17146439,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|chartjs-color",
            "value": 895408,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|tinycolor2",
            "value": 660026,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "parse blue|chroma-js",
            "value": 697861,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "parse blue|color-parse",
            "value": 8341103,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-parser",
            "value": 16038788,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "parse blue|color-string",
            "value": 3046142,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "alpha|@kurkle/color",
            "value": 595970523,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "alpha|chroma-js",
            "value": 813344,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "alpha|chartjs-color",
            "value": 76173590,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "negate|@kurkle/color",
            "value": 281096717,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "negate|chartjs-color",
            "value": 745053,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "lighten|@kurkle/color",
            "value": 4808376,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "lighten|chartjs-color",
            "value": 928739,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "darken|@kurkle/color",
            "value": 4513540,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chroma-js",
            "value": 386101,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "darken|chartjs-color",
            "value": 913783,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "saturate|@kurkle/color",
            "value": 4504405,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "saturate|chroma-js",
            "value": 277251,
            "range": "±5.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "saturate|chartjs-color",
            "value": 862734,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|@kurkle/color",
            "value": 4575714,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "desaturate|chroma-js",
            "value": 288229,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "desaturate|chartjs-color",
            "value": 876173,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "clearer|@kurkle/color",
            "value": 92446148,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clearer|chartjs-color",
            "value": 12748410,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "opaquer|@kurkle/color",
            "value": 20911905,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "opaquer|chartjs-color",
            "value": 38420387,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "mix|@kurkle/color",
            "value": 2440405,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "mix|chroma-js",
            "value": 326278,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "mix|chartjs-color",
            "value": 630497,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "clone|@kurkle/color",
            "value": 3344505,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "clone|chartjs-color",
            "value": 2177371,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "hexString|@kurkle/color",
            "value": 9848050,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "hexString|chartjs-color",
            "value": 1868267,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|@kurkle/color",
            "value": 8979263,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "hslString|chartjs-color",
            "value": 13069873,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "rgbString|@kurkle/color",
            "value": 13811953,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "rgbString|chartjs-color",
            "value": 12891279,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      }
    ]
  }
}
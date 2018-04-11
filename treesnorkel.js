tree=`{
  "title": "Sheaffer Snorkel Identification",
  "description":"A decision tree to identify the model of a Sheaffer Snorkel.",
  "branches":[
    {
      "id":"1",
      "content":"What is the body material?",
      "forks":[
        {"target":"1.1", "answer":"Plastic body"},
        {"target":"1.2", "answer":"Metal body"}
      ]
    },
    {
      "id":"1.1",
      "content":"Is there a white dot?",
      "forks":[
        {"target":"1.1.1", "answer":"White dot"},
        {"target":"1.1.2", "answer":"No white dot"}
      ]
    },
    {
      "id":"1.2",
      "content":"Are the body, cap, clip and filling knob all marked 14K or 18K?",
      "forks": [
        {"target":"1.2.1", "answer":"Marked 14K or 18K"},
        {"target":"1.2.2", "answer":"Not marked 14K or 18K"}
      ]
    },
    {
      "id": "1.1.1",
      "content": "What material is the cap?",
      "forks": [
        {
          "target": "1.1.1.1",
          "answer": "Plastic cap"
        },
        {
          "target": "1.1.1.2",
          "answer": "Metal cap"
        }
      ]
    },
    {
      "id": "1.1.1.1",
      "content": "How wide is the cap band?",
      "forks": [
        {
          "target": "1.1.1.1.1",
          "answer": "Cap band is 3/8 inch (9.5mm)"
        },
        {
          "target": "1.1.1.1.2",
          "answer": "Other width cap band"
        }
      ]
    },
    {
      "id": "1.1.1.1.1",
      "content": "Is the cap band marked 14K?",
      "forks": [
        {
          "target": "1.1.1.1.1.1",
          "answer": "Cap band marked 14K"
        },
        {
          "target": "1.1.1.1.1.2",
          "answer": "Cap band not marked 14K"
        }
      ]
    },
    {
      "id": "1.1.1.1.1.1",
      "content": "Valiant"
    },
    {
      "id": "1.1.1.1.1.2",
      "content": "Signature"
    },
    {
      "id": "1.1.1.1.2",
      "content": "Clipper"
    },
    {
      "id": "1.1.1.2",
      "content": "What nib does the pen have?",
      "forks": [
        {
          "target": "1.1.1.2.1",
          "answer": "PgAg nib"
        },
        {
          "target": "1.1.1.2.2",
          "answer": "two-tone 14K conical nib"
        }
      ]
    },
    {
      "id": "1.1.1.2.1",
      "content": "Clipper"
    },
    {
      "id": "1.1.1.2.2",
      "content": "Is the cap chrome with a gold filled band and clip?",
      "forks": [
        {
          "target": "1.1.1.2.1",
          "answer": "Chrome cap"
        },
        {
          "target": "1.1.1.2.2",
          "answer": "Not chrome cap"
        }
      ]
    },
    {
      "id": "1.1.1.2.2.1",
      "content": "Sentinel"
    },
    {
      "id": "1.1.1.2.2.2",
      "content": "Crest"
    },
    {
      "id": "1.2.1",
      "content": "This appears to be a Masterpiece. Nice find!"
    },
    {
      "id": "1.2.2",
      "content": "Is the body gold filled?",
      "forks": [
        {
          "target": "1.2.2.1",
          "answer": "Body is gold filled"
        },
        {
          "target": "1.2.2.2",
          "answer": "Body is not gold filled"
        }
      ]
    },
    {
      "id": "1.2.2.1",
      "content": "Insignia"
    },
    {
      "id": "1.2.2.2",
      "content": "Where was it made?",
      "forks": [
        {
          "target": "1.2.2.2.1",
          "answer": "Made in USA"
        },
        {
          "target": "1.2.2.2.2",
          "answer": "Made in Canada"
        }
      ]
    },
    {
      "id": "1.2.2.2.1",
      "content": "Triumph - can i put a lot of cool stuff here? Like several sentences that make a full paragraph? What about <em>italics</em>?"
    },
    {
      "id": "1.2.2.2.2",
      "content": "Signet"
    },
    {
      "id": "1.1.2",
      "content": "What material is the cap?",
      "forks": [
        {
          "target": "1.1.2.1",
          "answer": "Plastic cap"
        },
        {
          "target": "1.1.2.2",
          "answer": "Metal cap"
        }
      ]
    },
    {
      "id": "1.1.2.1",
      "content": "Sovereign"
    },
    {
      "id": "1.1.2.2",
      "content": "What nib does the pen have?",
      "forks": [
        {
          "target": "1.1.2.2.1",
          "answer": "PgAg nib"
        },
        {
          "target": "1.1.2.2.2",
          "answer": "Gold mono-tone open nib"
        },
        {
          "target": "1.1.2.2.3",
          "answer": "Gold two-tone open nib"
        }
      ]
    },
    {
      "id": "1.1.2.2.1",
      "content": "Special"
    },
    {
      "id": "1.1.2.2.2",
      "content": "Admiral"
    },
    {
      "id": "1.1.2.2.3",
      "content": "Saratoga"
    }
  ]
}`;
var treedata = JSON.parse(tree);
var currentId = treedata.branches[0].id;

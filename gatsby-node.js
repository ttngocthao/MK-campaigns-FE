//get external data
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const fetch = require("node-fetch");
  const dataUrl = "http://localhost:3001/api/campaigns";
  const NODE_TYPE = "Campaign";
  const { createNode } = actions;
  const res = await fetch(dataUrl);
  const campaigns = await res.json();
  console.log("testing");
  console.log(campaigns);
  campaigns.forEach((campaign) => {
    createNode({
      ...campaign,
      id: campaign.id,
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(campaign),
        contentDigest: createContentDigest(campaign),
      },
    });
  });
};

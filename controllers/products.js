const Shopify = require('shopify-api-node');

const shopify = new Shopify({
	shopName: 'wyntra-sns',
	apiKey: 'c8114ff84b5741f44ba7eadf3d44de02',
	password: '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',
});

const getProductCollection = async () => {
  let id = 199559381144;
  do {
    const collection = await shopify.collection.get(id);
    return collection;
  } while (id !== undefined);
};

exports.getProducts = async function (req, res, next) {
	const pid = req.params.pid;
  let params = { limit: 10 };
  do {
    const products = await shopify.product.list(params);
    return res.status(200).json({
      data: {
        products,
        status: 200,
      },
    });
    // params = products.nextPageParameters;
  } while (params !== undefined);
};
  
exports.getProduct = async function (req, res, next) {
	const pid = req.params.pid;
  const p = await shopify.product.get(pid);
	return res.status(200).json({
		data: {
      product: p,
			status: 200,
		},
	});
};
  
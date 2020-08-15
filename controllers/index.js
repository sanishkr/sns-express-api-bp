const Shopify = require('shopify-api-node');
const products = require('./products');

const shopify = new Shopify({
	shopName: 'wyntra-sns',
	apiKey: 'c8114ff84b5741f44ba7eadf3d44de02',
	password: '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',
});

const getProducts = async () => {
  let params = { limit: 10 };
  do {
    const products = await shopify.product.list(params);
    // console.log(products);
    return products;
    params = products.nextPageParameters;
  } while (params !== undefined);
};
const getProductCollection = async () => {
  let id = 199559381144;
  do {
    const collection = await shopify.collection.get(id);
    return collection;
  } while (id !== undefined);
};

const getProduct = async () => {
  let id = 5294033174680;
  do {
    const p = await shopify.product.get(id);
    return p;
  } while (id !== undefined);
};

exports.sample = async function (req, res, next) {
	const param1 = req.params.param1;
	// const products = await getProducts()
	const product = await getProduct()
	// const collection = await getProductCollection()

	const body = req.body;
	return res.status(200).json({
		request: {
      param1,
			body,
		},
		response: {
      // collection,
      // products,
      product,
			status: true,
			msg: 'Some Message.',
		},
	});
};

exports.products = products;

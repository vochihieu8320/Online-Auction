module.exports = {
  "openapi": "3.0.3", // present supported openapi version
  "info": {
    "title": "Online Auction API", // short title.
    "description": " API", //  desc.
    "version": "1.0.0", // version number
    "contact": {
      "name": "VCH", // your name
      "email": "john@web.com", // your email
      "url": "web.com", // your website
    },
  },
  "paths": {
    "/categories": {
        "get": {
            "tags": [
                "Categories"
            ],
            "summary": "Get all user categories",
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Categories"
                    }
                }
            }
        },
        "post": {
            "tags": [
                "Categories"
            ],
            "summary": "Create a new category in system",
            "requestBody": {
                "description": "Category Object",
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/definitions/Category"
                        }
                    }
                }
            },
            "produces": [
                "application/json"
            ],
            "responses": {
                "200": {
                    "description": "OK",
                },
                "400": {
                    "description": "Failed. Bad post data."
                }
            }
        }
    },
    "/categories/{categoryID}": {
        "parameters": [
            {
                "name": "categoryID",
                "in": "path",
                "required": true,
                "description": "ID of the category that we want to udpate",
                "type": "string"
            }
        ],
        "patch": {
            "summary": "Update category with given categoryID",
            "tags": [
                "Categories"
            ],
            "requestBody": {
                "description": "Category Object",
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/definitions/Category"
                        }
                    }
                }
            },
            "parameters": [
                {
                    "in": "path",
                    "name": "categoryID",
                    "required": true,
                    "description": "ID of the category that we want to udpate",
                    "schema": {
                        "$ref": "#/definitions/id"
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Category"
                    }
                },
                "400": {
                    "description": "Failed. Bad post data."
                },
            }
        },
        "delete": {
            "summary": "Delete category with given ID",
            "tags": [
                "Categories"
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/id"
                    }
                },
                "404": {
                    "description": "Failed. Category not found."
                }
            }
        }
    },
    "/products/{page}": {
      "get": {
          "tags": [
              "Products"
          ],
          "summary": "Get all products",
          "parameters": [
            {
                "name": "page",
                "in": "path",
                "required": true,
                "description": "current page should start with 0",
                "type": "string"
            }
        ],
          "responses": {
              "200": {
                  "description": "OK",
                  "schema": {
                      "$ref": "#/definitions/product"
                  }
              }
          }
      },
    },
    "/products":{
      "post": {
        "tags": [
            "Products"
        ],
        "summary": "Create a new Product in system",
        "requestBody": {
            "description": "Product Object",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/definitions/product"
                    }
                }
            }
        },
        "produces": [
            "application/json"
        ],
        "responses": {
            "200": {
                "description": "OK",
            },
            "400": {
                "description": "Failed. Bad post data."
            }
        }
    }
    },
    "/products/{productID}": {
      "parameters": [
          {
              "name": "productID",
              "in": "path",
              "required": true,
              "description": "ID of the product that we want to udpate",
              "type": "string"
          }
      ],
      "patch": {
          "summary": "Update produc with given productID",
          "tags": [
              "Products"
          ],
          "requestBody": {
              "description": "Product Object",
              "required": true,
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/definitions/product"
                      }
                  }
              }
          },
          "responses": {
              "200": {
                  "description": "OK",
                  "schema": {
                      "$ref": "#/definitions/product"
                  }
              },
              "400": {
                  "description": "Failed. Bad post data."
              },
          }
      },
      "delete": {
          "summary": "Delete product with given ID",
          "tags": [
              "Products"
          ],
          "responses": {
              "200": {
                  "description": "OK",
                  "schema": {
                      "$ref": "#/definitions/id"
                  }
              },
              "404": {
                  "description": "Failed. Category not found."
              }
          }
      }
  },
  },
  "definitions": {
    "id": {
        "properties": {
            "uuid": {
                "type": "string"
            }
        }
    },
    "user": {
        "type": "object",
        "properties": {
            "genus": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "isHungry": {
                "type": "boolean"
            },
            "lastFedDate": {
                "type": "string"
            }
        }
    },

    "Category": {
      "type": "object",
      "properties": {
          "name": {
              "type": "string"
          },
        }
      },
    "product": {
      "type": "object",
      "properties":{
        "name": {"type": "string" } ,
        "price": {"type": "string"},
        "seller": {"type": "string"},
        "date_add": {"type": "string"},
        "date_bid": {"type": "string"},
        "category": {"type": "string"},
        "img":  {"type": "string"}
      }
    },
    "Categories": {
        "type": "object",
        "properties": {
            "cats": {
                "type": "object",
                "additionalProperties": {
                    "$ref": "#/definitions/Category"
                }
            }
        }
    }
  }
};
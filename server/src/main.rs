#[macro_use] extern crate log;
use pretty_env_logger;

use warp::{self, Filter};

#[tokio::main]
async fn main() {
    pretty_env_logger::init();

    let hello = warp::path!("hello" / String).map(|name| format!("Hello, {}!", name));

    info!("starting server at 127.0.0.1:1235");

    warp::serve(hello).run(([127, 0, 0, 1], 1235)).await;
}

import { Before, Given, When, Then, CallbackStepDefinition } from "cucumber";
import { expect } from "chai";
import { Rocket } from "../../src/Rocket";

interface TestContext {
  rocket?: Rocket;
}

const context: TestContext = {};

Before(function () {
    context.rocket = new Rocket();
});

Given(/^I am Elon Musk attempting to launch a rocket into space$/, function () {
});

When(/^I launch the rocket$/, function () {
  context.rocket.launch();
});

Then(/^the rocket should end up in space$/, function () {
  expect(context.rocket.isInSpace).to.equal(true);
});

Then(/^the booster\(s\) should land back on the launch pad$/, function () {
  expect(context.rocket.boostersLanded).to.equal(true);
});

Then(/^nobody should doubt me ever again$/, function () {
  expect("people").not.to.equal("haters");
});

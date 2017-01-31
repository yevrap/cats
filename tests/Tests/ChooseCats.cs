using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support;

namespace Tests
{
    [TestClass]
    public class ChooseCats
    {

        IWebDriver driver;
        string url = "https://yevrap.github.io/cats";

        [TestInitialize]
        public void TestSetup()
        {
            driver = new ChromeDriver();
            driver.Navigate().GoToUrl(url);
        }

        [TestCleanup]
        public void Cleanup()
        {
            driver.Quit();
        }

        [TestMethod]
        public void PageLoad()
        {
            string title = driver.Title;
            IWebElement startButton = driver.FindElement(By.Id("start"));
            Assert.AreEqual(title, "Cats");
            Assert.AreEqual(startButton.GetAttribute("id"), "start");
        }
    }
}

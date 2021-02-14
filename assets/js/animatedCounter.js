const counters = document.querySelectorAll('.counter')
const speed = 500

counters.forEach(counter => {
  const updateCount = () => {

    const target = +counter.getAttribute('data-target')
    console.log("Targeting",target);

    const count = +counter.innerText
    console.log(count);

    const inc = target / speed
    console.log("Incrementing", inc);

    if(count < target) {
      counter.innerText = count + inc
      setTimeout(updateCount, 1)
    } else {
      counter.innerText = target
    }

  }

  updateCount()
})

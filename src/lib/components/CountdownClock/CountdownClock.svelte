<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import NumberCard from './NumberCard.svelte'; 
  
    export let event_date: string;

    interface Time {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    }
  
    let endDateTime = new Date(event_date);
    let intervalId: ReturnType<typeof setInterval>; // setInterval has wonky polymorphic return types, this avoids issues by detecting type
    let timeDifference: number;

    function updateTime(): Time {
      let currentTime = new Date();
      timeDifference = endDateTime.getTime() - currentTime.getTime();
  
      let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      return { days, hours, minutes, seconds };
    }
  
    let time: Time = updateTime();
    
    $: endDateTime = new Date(event_date); //# hack to enable mock settings widget - the better version of this component is in host-poc

    onMount(() => {
      intervalId = setInterval(() => {
        time = updateTime();
      }, 1000);
    });
  
    onDestroy(() => {
      clearInterval(intervalId);
    });
  </script>
  
  <div class="p-12 space-y-12 w-full rounded-md bg-[color:var(--theme-surface)]">
  {#if timeDifference > 0}  
    <h2 class="text-3xl">Your event will begin in:</h2>
    <NumberCard number={time.days} label="Days" />
    <NumberCard number={time.hours} label="Hours" autohide={time.days < 1} />
    <NumberCard number={time.minutes} label="Minutes" autohide={time.hours < 1} />
    <NumberCard number={time.seconds} label="Seconds" autohide={time.minutes < 1} />
  {:else}
  <h1 class="text-[color:var(--theme-primary)] text-3xl">Your event has started!</h1>
  {/if}
  </div>
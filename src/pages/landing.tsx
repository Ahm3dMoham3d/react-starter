import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { decrement, increment } from "@/store/counterSlice";
import { Button } from "@/components/ui/button";
export default function index() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='text-4xl font-bold'>{count}</div>
      <div className='flex gap-4'>
        <Button size={"lg"} onClick={() => dispatch(increment())}>
          +
        </Button>
        <Button size={"lg"} onClick={() => dispatch(decrement())}>
          -
        </Button>
      </div>
    </div>
  );
}

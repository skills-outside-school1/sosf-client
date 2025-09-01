import {
  faGripLinesVertical,
  faPeopleArrows,
  faProcedures,
} from "@fortawesome/free-solid-svg-icons";

import FrameWork from "@/components/shared/framework";
import { H3 } from "@/components/shared/Atoms/Typography/typography";

const focusItems = [
  {
    avatar: faPeopleArrows,
    title: "Desktop evaluation via AI tools",
    scroll_ref: "end-to-end",
  },
  {
    avatar: faProcedures,
    title: "Beneficiary digital registration",
    scroll_ref: "consultancy-section",
  },
  {
    avatar: faGripLinesVertical,
    title: "Baseline data capture",
    scroll_ref: "research-section",
  },
  {
    avatar: faPeopleArrows,
    title: "Midline & endline evaluation",
    scroll_ref: "end-to-end",
  },
  {
    avatar: faProcedures,
    title: "Impact assessment",
    scroll_ref: "consultancy-section",
  },
  {
    avatar: faGripLinesVertical,
    title: "Program learning & improvement",
    scroll_ref: "research-section",
  },
  {
    avatar: faPeopleArrows,
    title: "   Institutionalization & advocacy",
    scroll_ref: "end-to-end",
  },
];

export default function MelFramework() {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center w-full">
      {" "}
      <FrameWork title="7 Step MEL Framework" items={focusItems} />
      <H3>We don’t guess. We measure, learn, adapt, and scale what works.</H3>
    </div>
  );
}

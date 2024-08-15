import { cn } from "@/utils/lib";
import {
  BrainCircuit,
  BriefcaseBusiness,
  FolderOpen,
  School,
} from "lucide-react";
import { Handle, type NodeProps, Position } from "reactflow";

export type NodeType = keyof typeof nodeSVGs;
const nodeSVGs = {
  institution: School,
  job: BriefcaseBusiness,
  project: FolderOpen,
  knowledge: BrainCircuit,
} as const;

export type NodePortPosition = "top" | "bottom" | "left" | "right";

export type NodeData = {
  label: string;
  type: NodeType;
  ports: NodePortPosition[];
  className?: string;
};

const nodePorts: {
  position: NodePortPosition;
  type: "source" | "target";
  pos: Position;
}[] = [
  { position: "left", type: "target", pos: Position.Left },
  { position: "right", type: "source", pos: Position.Right },
  { position: "top", type: "target", pos: Position.Top },
  { position: "bottom", type: "source", pos: Position.Bottom },
];

export const DefaultNode = (props: NodeProps<NodeData>) => {
  const Svg = nodeSVGs[props.data.type];

  return (
    <>
      {/* <div className="flex h-full w-full rounded-lg border border-b-2 border-secondary/30 border-b-primary bg-base-100/30 shadow-lg backdrop-blur-xs"> */}
      <div className="flex h-full w-full rounded-lg border border-b-[3px] border-secondary/60 border-b-primary bg-base-100/30 shadow-lg backdrop-blur-xs">
        <div className="flex w-full items-center justify-center p-2 text-center">
          {props.data.label}
        </div>

        <div className="flex w-12 min-w-12 justify-center py-2">
          <Svg className="size-6 text-primary/70" />
        </div>
      </div>

      {nodePorts.map(({ position, type, pos }) =>
        props.data.ports.includes(position) ? (
          <Handle
            key={position}
            id={position}
            type={type}
            position={pos}
            style={{ opacity: 0 }}
          />
        ) : null,
      )}

      {/* {props.data.ports.includes("top") && (
        <Handle id="a" type="target" position={Position.Top} />
      )}
      {props.data.ports.includes("bottom") && (
        <Handle id="b" type="source" position={Position.Bottom} />
      )}
      {props.data.ports.includes("left") && (
        <Handle id="c" type="target" position={Position.Left} />
      )}
      {props.data.ports.includes("right") && (
        <Handle id="d" type="source" position={Position.Right} />
      )} */}
    </>
  );
};

export const JobNode = (props: NodeProps<NodeData>) => {
  const Svg = nodeSVGs[props.data.type];

  return (
    <div className="radius h-full w-full">
      <div
        className={cn(
          !!props.data.className && props.data.className,
          "gradient-border-bg h-full w-full",
        )}
      >
        <div className="absolute left-0 top-0 flex h-full w-full rounded-lg border border-secondary/30 bg-base-100/30 shadow-lg backdrop-blur-xs">
          <div className="flex w-full items-center justify-center p-2 text-center">
            {props.data.label}
          </div>

          <div className="flex w-12 min-w-12 justify-center py-2">
            <Svg className="size-6 text-primary/70" />
          </div>
        </div>
      </div>

      {nodePorts.map(({ position, type, pos }) =>
        props.data.ports.includes(position) ? (
          <Handle
            key={position}
            id={position}
            type={type}
            position={pos}
            style={{ opacity: 0 }}
          />
        ) : null,
      )}
    </div>
  );
};

export const ParentNode = (props: NodeProps<NodeData>) => {
  return (
    <>
      <div className="flex h-full w-full rounded-xl border border-secondary/60 bg-base-100/30 shadow-lg backdrop-blur-xs" />

      {nodePorts.map(({ position, type, pos }) =>
        props.data.ports.includes(position) ? (
          <Handle
            key={position}
            id={position}
            type={type}
            position={pos}
            style={{ opacity: 0 }}
          />
        ) : null,
      )}
    </>
  );
};
